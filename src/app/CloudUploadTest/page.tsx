"use client";

import { useEffect, useState } from "react";

type ToolType = "image-to-pdf" | "pdf-compress";

interface Job {
  job_id: string;
  tool: string;
  status: string;
  created_at: number;
  completed_at?: number;
  error?: string;
  downloadUrl?: string;
}

/**
 * IMPORTANT:
 * Uses env automatically in production
 */
const API = `${process.env.NEXT_PUBLIC_API_BASE}/cloud`;

export default function AdminPanel() {
  const [file, setFile] = useState<File | null>(null);
  const [tool, setTool] =
    useState<ToolType>("image-to-pdf");

  const [log, setLog] = useState<string[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [uploading, setUploading] = useState(false);

  const addLog = (msg: string) => {
    console.log(msg);
    setLog((p) => [
      ...p,
      `[${new Date().toLocaleTimeString()}] ${msg}`,
    ]);
  };

  // ------------------------------------------------
  // JOB QUEUE POLLING
  // ------------------------------------------------
  const loadJobs = async () => {
    try {
      const res = await fetch(`${API}/jobs`);
      const data = await res.json();
      setJobs(data);
    } catch {
      addLog("⚠️ Failed to load jobs");
    }
  };

  useEffect(() => {
    loadJobs();
    const i = setInterval(loadJobs, 3000);
    return () => clearInterval(i);
  }, []);

  // ------------------------------------------------
  // METRICS
  // ------------------------------------------------
  const duration = (job: Job) => {
    if (!job.completed_at) return "-";
    return (
      (job.completed_at - job.created_at).toFixed(1) +
      "s"
    );
  };

  // ------------------------------------------------
  // RETRY
  // ------------------------------------------------
  const retryJob = async (id: string) => {
    addLog(`Retrying ${id}...`);

    await fetch(`${API}/job/${id}/retry`, {
      method: "POST",
    });

    loadJobs();
  };

  // ------------------------------------------------
  // STEP 1 — SIGNED URL
  // ------------------------------------------------
  const getUploadUrl = async (filename: string) => {
    addLog("Requesting signed URL...");

    const res = await fetch(`${API}/upload-url`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename }),
    });

    if (!res.ok)
      throw new Error("Signed URL failed");

    addLog("Signed URL received ✅");
    return res.json();
  };

  // ------------------------------------------------
  // STEP 2 — DIRECT GCS UPLOAD
  // ------------------------------------------------
  const uploadToGCS = async (
    url: string,
    file: File
  ) => {
    addLog("Uploading file to GCS...");

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type":
          file.type || "application/octet-stream",
      },
      body: file,
    });

    if (!res.ok)
      throw new Error("Upload failed");

    addLog("Upload complete ✅");
  };

  // ------------------------------------------------
  // STEP 3 — START JOB
  // ------------------------------------------------
  const startProcess = async (
    filePath: string
  ) => {
    addLog(`Triggering ${tool} worker...`);

    const res = await fetch(
      `${API}/process/${tool}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          file_path: filePath,
        }),
      }
    );

    if (!res.ok)
      throw new Error("Process start failed");

    return res.json();
  };

  // ------------------------------------------------
  // PIPELINE
  // ------------------------------------------------
  const handleUpload = async () => {
    if (!file || uploading) return;

    setUploading(true);

    try {
      addLog("🚀 Starting pipeline");

      const { uploadUrl, filePath } =
        await getUploadUrl(file.name);

      await uploadToGCS(uploadUrl, file);

      const job = await startProcess(filePath);

      addLog(`Worker queued ✅ Job: ${job.job_id}`);
    } catch (err: any) {
      addLog(`❌ ERROR: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  // ------------------------------------------------
  // UI
  // ------------------------------------------------
  return (
    <div style={{ padding: 40 }}>
      <h1>⚙️ Admin Control Panel</h1>

      <h2>Upload Tester</h2>

      <select
        value={tool}
        onChange={(e) =>
          setTool(e.target.value as ToolType)
        }
      >
        <option value="image-to-pdf">
          Image → PDF
        </option>
        <option value="pdf-compress">
          PDF Compress
        </option>
      </select>

      <br /><br />

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br /><br />

      <button
        disabled={uploading}
        onClick={handleUpload}
      >
        {uploading
          ? "Uploading..."
          : "Upload & Process"}
      </button>

      <hr />

      <h2>Job Queue</h2>

      <table border={1} cellPadding={8} width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tool</th>
            <th>Status</th>
            <th>Time</th>
            <th>Result</th>
            <th>Retry</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job) => (
            <tr key={job.job_id}>
              <td>{job.job_id.slice(0, 8)}</td>
              <td>{job.tool}</td>

              <td>
                {job.status === "failed"
                  ? "❌ failed"
                  : job.status === "completed"
                  ? "✅ done"
                  : "⏳ processing"}
              </td>

              <td>{duration(job)}</td>

              <td>
                {job.downloadUrl && (
                  <a
                    href={job.downloadUrl}
                    target="_blank"
                  >
                    Download
                  </a>
                )}
              </td>

              <td>
                {job.status === "failed" && (
                  <button
                    onClick={() =>
                      retryJob(job.job_id)
                    }
                  >
                    Retry
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <h2>Logs</h2>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: 20,
          height: 220,
          overflow: "auto",
        }}
      >
        {log.join("\n")}
      </pre>
    </div>
  );
}
