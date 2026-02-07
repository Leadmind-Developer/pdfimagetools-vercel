"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [filter, setFilter] = useState("all");
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/tasks/all`);
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to fetch tasks", err);
    }
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const toggleExpand = (taskId) => {
    setExpanded((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const filteredTasks =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div style={{ padding: "16px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>
        Upload Task Dashboard
      </h2>

      {/* Filter */}
      <div style={{ marginBottom: "12px" }}>
        <label>
          Show:{" "}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: "4px", marginLeft: "4px" }}
          >
            <option value="all">All</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </label>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "24px",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>Task ID</th>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>File</th>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>Created</th>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>Status</th>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>Result</th>
            <th style={{ border: "1px solid #ccc", padding: "6px" }}>Logs</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((t) => (
            <React.Fragment key={t.task_id}>
              <tr>
                <td style={{ border: "1px solid #ccc", padding: "6px", fontSize: "12px" }}>
                  {t.task_id}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "6px" }}>{t.filename}</td>
                <td style={{ border: "1px solid #ccc", padding: "6px", fontSize: "12px" }}>
                  {new Date(t.created_at).toLocaleString()}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "6px", fontWeight: "bold" }}>
                  <span
                    style={{
                      color:
                        t.status === "completed"
                          ? "green"
                          : t.status === "failed"
                          ? "red"
                          : "blue",
                    }}
                  >
                    {t.status}
                  </span>
                </td>
                <td style={{ border: "1px solid #ccc", padding: "6px" }}>
                  {t.result ? (
                    <a href={t.result} target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "6px" }}>
                  <button onClick={() => toggleExpand(t.task_id)}>
                    {expanded[t.task_id] ? "Hide Logs" : "Show Logs"}
                  </button>
                </td>
              </tr>

              {expanded[t.task_id] && (
                <tr>
                  <td
                    colSpan={6}
                    style={{
                      border: "1px solid #ccc",
                      padding: "6px",
                      background: "#fafafa",
                      fontFamily: "monospace",
                      fontSize: "12px",
                    }}
                  >
                    {t.logs && t.logs.length ? (
                      <ul style={{ margin: 0, paddingLeft: "16px" }}>
                        {t.logs.map((log, idx) => (
                          <li key={idx}>
                            [{new Date(log.timestamp).toLocaleString()}] {log.message}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span>No logs available</span>
                    )}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

