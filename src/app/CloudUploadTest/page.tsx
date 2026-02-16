import { useState } from "react";

export default function CloudUploadTest() {
  const [file, setFile] = useState(null);
  const [log, setLog] = useState([]);

  const API = "http://localhost:8000/cloud"; 
  // change to Cloud Run URL later

  const addLog = (msg) => {
    console.log(msg);
    setLog((prev) => [...prev, msg]);
  };

  // STEP 1 — get signed URL
  const getUploadUrl = async (filename) => {
    addLog("Requesting signed URL...");

    const res = await fetch(`${API}/upload-url`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        filename,
      }),
    });

    if (!res.ok) throw new Error("Failed to get upload URL");

    return res.json();
  };

  // STEP 2 — upload directly to GCS
  const uploadToGCS = async (uploadUrl, file) => {
    addLog("Uploading directly to GCS...");

    const res = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type || "application/pdf",
      },
      body: file,
    });

    if (!res.ok) throw new Error("GCS upload failed");

    addLog("Upload complete ✅");
  };

  // STEP 3 — trigger processing
  const triggerProcess = async (filePath) => {
    addLog("Triggering processing job...");

    const res = await fetch(`${API}/process/image-to-pdf`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        file_path: filePath,
      }),
    });

    const data = await res.json();

    addLog(`Job started: ${data.job_id}`);
  };

  const handleUpload = async () => {
    try {
      if (!file) return alert("Select a file first");

      addLog("Starting flow...");

      // 1️⃣ signed url
      const { uploadUrl, filePath } =
        await getUploadUrl(file.name);

      addLog("Signed URL received");

      // 2️⃣ upload
      await uploadToGCS(uploadUrl, file);

      // 3️⃣ process
      await triggerProcess(filePath);

      addLog("Pipeline success 🎉");
    } catch (err) {
      console.error(err);
      addLog(`ERROR: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h2>Cloud Upload Test</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
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
