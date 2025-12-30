import React, { useEffect } from "react";

/* =====================
   MOCK DATA
===================== */

const stats = [
  {
    title: "Total Complaints",
    value: 6,
    color: "#2563eb",
    bg: "#eff6ff",
    icon: "📄",
  },
  {
    title: "Pending",
    value: 2,
    color: "#dc2626",
    bg: "#fef2f2",
    icon: "⏳",
  },
  {
    title: "In Progress",
    value: 2,
    color: "#f59e0b",
    bg: "#fffbeb",
    icon: "🔄",
  },
  {
    title: "Resolved",
    value: 2,
    color: "#16a34a",
    bg: "#f0fdf4",
    icon: "✅",
  },
];

/* =====================
   DASHBOARD
===================== */

export default function Dashboard() {
  /* Hide sidebar & topbar */
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const topbar = document.querySelector(".topbar");

    if (sidebar) sidebar.style.display = "none";
    if (topbar) topbar.style.display = "none";

    return () => {
      if (sidebar) sidebar.style.display = "";
      if (topbar) topbar.style.display = "";
    };
  }, []);

  return (
    <div style={page}>
      <div style={container}>
        {/* Header */}
        <div style={header}>
          <h1 style={title}>Citizen Dashboard</h1>
          <p style={subtitle}>
            Overview of your complaints and their current status
          </p>
        </div>

        {/* Stats */}
        <div style={statsGrid}>
          {stats.map((item, i) => (
            <div
              key={i}
              style={{
                ...card,
                background: item.bg,
                borderLeft: `6px solid ${item.color}`,
              }}
            >
              <div style={icon}>{item.icon}</div>
              <h2 style={{ color: item.color }}>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div style={infoCard}>
          <h3 style={{ marginBottom: "10px" }}>
            📌 What you can do here
          </h3>
          <ul style={list}>
            <li>View status of all your complaints</li>
            <li>Track progress in real time</li>
            <li>Get faster resolution updates</li>
            <li>Maintain transparency with authorities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* =====================
   STYLES
===================== */

const page = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  display: "flex",
  justifyContent: "center",
  padding: "40px 20px",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const header = {
  marginBottom: "35px",
};

const title = {
  fontSize: "34px",
  fontWeight: "700",
  color: "#0f172a",
};

const subtitle = {
  color: "#475569",
  marginTop: "6px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
  marginBottom: "35px",
};

const card = {
  padding: "22px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const icon = {
  fontSize: "26px",
  marginBottom: "8px",
};

const infoCard = {
  background: "white",
  padding: "26px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const list = {
  paddingLeft: "18px",
  lineHeight: "1.8",
  color: "#334155",
};
