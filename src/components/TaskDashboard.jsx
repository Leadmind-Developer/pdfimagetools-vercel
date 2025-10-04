"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const baseURL = import.meta.env.VITE_API_URL;

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${baseURL}/tasks/all`);
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    const interval = setInterval(fetchTasks, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload Task Dashboard</h2>
      <table className="w-full border table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Task ID</th>
            <th className="p-2">File</th>
            <th className="p-2">Created</th>
            <th className="p-2">Status</th>
            <th className="p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.task_id}>
              <td className="p-2 text-xs">{t.task_id}</td>
              <td className="p-2">{t.filename}</td>
              <td className="p-2 text-sm">{new Date(t.created_at).toLocaleString()}</td>
              <td className="p-2">
                <span
                  className={`font-bold ${
                    t.status === "completed"
                      ? "text-green-600"
                      : t.status === "failed"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {t.status}
                </span>
              </td>
              <td className="p-2">
                {t.result ? (
                  <a
                    href={t.result}
                    className="text-blue-500 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskDashboard;
