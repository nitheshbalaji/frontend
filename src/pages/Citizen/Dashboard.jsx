import React, { useEffect } from "react";

/* ======================
   MOCK DATA
   ====================== */

const stats = [
  {
    label: "Total Complaints",
    value: 6,
    gradient: "linear-gradient(135deg, #2563eb, #60a5fa)",
    icon: "📄",
  },
  {
    label: "Pending",
    value: 2,
    gradient: "linear-gradient(135deg, #dc2626, #f87171)",
    icon: "⏳",
  },
  {
    label: "In Progress",
    value: 2,
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
    icon: "🔄",
  },
  {
    label: "Resolved",
    value: 2,
    gradient: "linear-gradient(135deg, #16a34a, #4ade80)",
    icon: "✅",
  },
];

const complaints = [
  {
    id: 1,
    title: "Street light not working",
    category: "Electricity",
    status: "Pending",
    progress: 25,
  },
  {
    id: 2,
    title: "Water leakage near house",
    category: "Water",
    status: "In Progress",
    progress: 60,
  },
  {
    id: 3,
    title: "Garbage not collected",
    category: "Sanitation",
    status: "Resolved",
    progress: 100,
  },
];

/* ======================
   DASHBOARD
   ====================== */

export default function CitizenDashboard() {
  /* 🔥 Hide sidebar & topbar ONLY on this page */
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
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: "34px", fontWeight: "800" }}>
          Your Dashboard ✨
        </h1>
        <p style={{ color: "#334155", marginTop: "6px" }}>
          Track your complaints and progress in real time
        </p>
      </div>

      {/* Stats Cards */}
      <div style={statsGrid}>
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              ...statCard,
              background: item.gradient,
            }}
          >
            <div style={statIcon}>{item.icon}</div>
            <h2 style={{ fontSize: "36px", margin: "12px 0 4px" }}>
              {item.value}
            </h2>
            <p style={{ opacity: 0.9 }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* Complaints Section */}
      <div style={glassCard}>
        <h3 style={sectionTitle}>📂 Your Complaints</h3>

        {complaints.map((c) => (
          <div key={c.id} style={complaintRow}>
            <div>
              <h4 style={{ margin: 0 }}>{c.title}</h4>
              <p style={{ fontSize: "13px", color: "#475569" }}>
                {c.category}
              </p>
            </div>

            <div style={{ width: "180px" }}>
              <div style={progressBar}>
                <div
                  style={{
                    ...progressFill,
                    width: `${c.progress}%`,
                    background:
                      c.status === "Pending"
                        ? "#ef4444"
                        : c.status === "In Progress"
                        ? "#f59e0b"
                        : "#22c55e",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", marginTop: "6px" }}>
                {c.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ======================
   STYLES
   ====================== */

const pageStyle = {
  minHeight: "100vh",
  padding: "40px",
  background:
    "linear-gradient(135deg, #dbeafe, #fef3c7, #e0f2fe)",
};

const headerStyle = {
  marginBottom: "35px",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "22px",
  marginBottom: "40px",
};

const statCard = {
  color: "white",
  padding: "26px",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
  position: "relative",
};

const statIcon = {
  fontSize: "32px",
};

const glassCard = {
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(12px)",
  padding: "28px",
  borderRadius: "20px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "20px",
};

const complaintRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 0",
  borderBottom: "1px solid #e5e7eb",
};

const progressBar = {
  height: "8px",
  background: "#e5e7eb",
  borderRadius: "999px",
  overflow: "hidden",
};

const progressFill = {
  height: "100%",
  borderRadius: "999px",
};
