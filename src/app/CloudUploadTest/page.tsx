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

export default function AdminPanel() {
  const API = "http://localhost:8000/cloud";

  const [file, setFile] = useState<File | null>(null);
  const [tool, setTool] = useState<ToolType>("image-to-pdf");
  const [log, setLog] = useState<string[]>([]);
  const [jobs, setJobs] = useState<Job[]>([]);

  const addLog = (msg: string) =>
    setLog((p) => [...p, msg]);

  // ---------------------------
  // JOB QUEUE VIEWER
  // ---------------------------
  const loadJobs = async () => {
    const res = await fetch(`${API}/jobs`);
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    loadJobs();
    const i = setInterval(loadJobs, 4000);
    return () => clearInterval(i);
  }, []);

  // ---------------------------
  // METRICS
  // ---------------------------
  const duration = (job: Job) => {
    if (!job.completed_at) return "-";
    return (
      (job.completed_at - job.created_at).toFixed(1) + "s"
    );
  };

  // ---------------------------
  // RETRY
  // ---------------------------
  const retryJob = async (id: string) => {
    await fetch(`${API}/job/${id}/retry`, {
      method: "POST",
    });
    addLog(`Retrying job ${id}`);
    loadJobs();
  };

  // ---------------------------
  // PIPELINE (existing logic)
  // ---------------------------
  const getUploadUrl = async (filename: string) => {
    const res = await fetch(`${API}/upload-url`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ filename }),
    });
    return res.json();
  };

  const uploadToGCS = async (url: string, file: File) => {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type":
          file.type || "application/octet-stream",
      },
      body: file,
    });
  };

  const startProcess = async (filePath: string) => {
    const res = await fetch(
      `${API}/process/${tool}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_path: filePath }),
      }
    );
    return res.json();
  };

  const handleUpload = async () => {
    if (!file) return;

    addLog("Starting pipeline...");

    const { uploadUrl, filePath } =
      await getUploadUrl(file.name);

    await uploadToGCS(uploadUrl, file);

    const job = await startProcess(filePath);

    addLog(`Job started: ${job.job_id}`);
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div style={{ padding: 40 }}>
      <h1>⚙️ Admin Control Panel</h1>

      {/* Upload Tester */}
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

      <button onClick={handleUpload}>
        Upload & Process
      </button>

      <hr />

      {/* JOB QUEUE */}
      <h2>Job Queue</h2>

      <table
        border={1}
        cellPadding={8}
        style={{ width: "100%" }}
      >
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

      {/* LOGS */}
      <h2>Logs</h2>
      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: 20,
          height: 200,
          overflow: "auto",
        }}
      >
        {log.join("\n")}
      </pre>
    </div>
  );
}
