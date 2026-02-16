"use client";

import { useState } from "react";

type ToolType = "image-to-pdf" | "pdf-compress";

export default function CloudUploadTest() {
  const [file, setFile] = useState<File | null>(null);
  const [tool, setTool] = useState<ToolType>("image-to-pdf");
  const [log, setLog] = useState<string[]>([]);

  const API = "http://localhost:8000/cloud";

  const addLog = (msg: string) => {
    console.log(msg);
    setLog((prev) => [...prev, msg]);
  };

  // STEP 1 — Signed URL
  const getUploadUrl = async (filename: string) => {
    addLog("Requesting signed URL...");

    const res = await fetch(`${API}/upload-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename }),
    });

    if (!res.ok) throw new Error("Failed to get upload URL");

    return res.json();
  };

  // STEP 2 — Upload to GCS
  const uploadToGCS = async (uploadUrl: string, file: File) => {
    addLog("Uploading directly to GCS...");

    const res = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type || "application/octet-stream",
      },
      body: file,
    });

    if (!res.ok) throw new Error("GCS upload failed");

    addLog("Upload complete ✅");
  };

  // STEP 3 — Trigger Processing
  const triggerProcess = async (filePath: string) => {
    addLog(`Triggering ${tool} job...`);

    const res = await fetch(`${API}/process/${tool}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_path: filePath }),
    });

    if (!res.ok) throw new Error("Processing start failed");

    return res.json();
  };

  // STEP 4 — Poll Job
  const pollJob = async (jobId: string) => {
    addLog("Waiting for result...");

    while (true) {
      await new Promise((r) => setTimeout(r, 3000));

      const res = await fetch(`${API}/job/${jobId}`);
      const data = await res.json();

      addLog(`Status: ${data.status}`);

      if (data.status === "completed") {
        addLog("Download ready ✅");
        window.open(data.downloadUrl, "_blank");
        break;
      }

      if (data.status === "failed") {
        addLog(`FAILED: ${data.error}`);
        break;
      }
    }
  };

  // MAIN FLOW
  const handleUpload = async () => {
    try {
      if (!file) {
        alert("Select a file first");
        return;
      }

      addLog(`Starting ${tool} pipeline...`);

      const { uploadUrl, filePath } =
        await getUploadUrl(file.name);

      addLog("Signed URL received");

      await uploadToGCS(uploadUrl, file);

      const job = await triggerProcess(filePath);

      addLog(`Job started: ${job.job_id}`);

      await pollJob(job.job_id);

      addLog("Pipeline success 🎉");
    } catch (err: any) {
      console.error(err);
      addLog(`ERROR: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h2>Cloud Upload Test</h2>

      {/* TOOL SELECTOR */}
      <div style={{ marginBottom: 20 }}>
        <label>Tool:</label>{" "}
        <select
          value={tool}
          onChange={(e) =>
_toggle omitted_
            setTool(e.target.value as ToolType)
          }
        >
          <option value="image-to-pdf">Image → PDF</option>
          <option value="pdf-compress">PDF Compress</option>
        </select>
      </div>

      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <br /><br />

      <button onClick={handleUpload}>
        Test Signed Upload
      </button>

      <hr />

      <h3>Logs</h3>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: 20,
          height: 300,
          overflow: "auto",
        }}
      >
        {log.join("\n")}
      </pre>
    </div>
  );
}
