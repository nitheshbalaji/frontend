import React from "react";

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "34px", fontWeight: "700" }}>
          Your Dashboard ✨
        </h1>
        <p style={{ color: "#555", marginTop: "6px" }}>
          Track your complaints and progress in real time
        </p>
      </div>

      {/* Stats Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          marginBottom: "50px",
        }}
      >
        <StatCard
          title="Total Complaints"
          value="6"
          color="#2563eb"
          emoji="📄"
        />
        <StatCard
          title="Pending"
          value="2"
          color="#dc2626"
          emoji="⏳"
        />
        <StatCard
          title="In Progress"
          value="2"
          color="#f59e0b"
          emoji="🔄"
        />
        <StatCard
          title="Resolved"
          value="2"
          color="#16a34a"
          emoji="✅"
        />
      </div>

      {/* Recent Complaints */}
      <div
        style={{
          background: "white",
          borderRadius: "18px",
          padding: "30px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>
          🧾 Recent Complaints
        </h2>

        <ComplaintItem
          title="Street lights not working"
          status="Pending"
          color="#dc2626"
        />
        <ComplaintItem
          title="Water leakage near apartment"
          status="In Progress"
          color="#f59e0b"
        />
        <ComplaintItem
          title="Garbage not collected"
          status="Resolved"
          color="#16a34a"
        />
      </div>
    </div>
  );
}

/* ---------- Small Components ---------- */

function StatCard({ title, value, color, emoji }) {
  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "26px",
        borderRadius: "20px",
        boxShadow: "0 15px 30px rgba(0,0,0,0.18)",
        transition: "transform 0.3s",
      }}
    >
      <div style={{ fontSize: "28px" }}>{emoji}</div>
      <h3 style={{ fontSize: "32px", margin: "12px 0" }}>
        {value}
      </h3>
      <p style={{ opacity: 0.9 }}>{title}</p>
    </div>
  );
}

function ComplaintItem({ title, status, color }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <span style={{ fontWeight: "500" }}>{title}</span>
      <span
        style={{
          padding: "6px 14px",
          borderRadius: "999px",
          background: color,
          color: "white",
          fontSize: "13px",
        }}
      >
        {status}
      </span>
    </div>
  );
}
