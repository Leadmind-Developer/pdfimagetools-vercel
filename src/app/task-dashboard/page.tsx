"use client";

import React, { useState } from "react";
import Head from "next/head";
import TaskDashboard from "../../components/TaskDashboard"; // adjust path if needed

export default function ProtectedTaskPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const correctPassword = "zyx";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setUnlocked(true);
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  return (
    <>
      <Head>
        <title>Protected Task Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div style={{ padding: "2rem", textAlign: "center" }}>
        {!unlocked ? (
          <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Enter Password to Access Dashboard</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              style={{
                width: "100%",
                padding: "0.5rem",
                marginTop: "1rem",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Open
            </button>
          </form>
        ) : (
          <TaskDashboard />
        )}
      </div>
    </>
  );
}
