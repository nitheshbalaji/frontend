import React from "react";

/* ======================
   MOCK DATA
====================== */

const stats = [
  { title: "Total Complaints", value: 6, color: "#2563eb", icon: "📄" },
  { title: "Pending", value: 2, color: "#dc2626", icon: "⏳" },
  { title: "In Progress", value: 2, color: "#f59e0b", icon: "🔄" },
  { title: "Resolved", value: 2, color: "#16a34a", icon: "✅" },
];

const recentComplaints = [
  {
    title: "Street light not working",
    status: "Pending",
    progress: 30,
  },
  {
    title: "Water leakage near road",
    status: "In Progress",
    progress: 60,
  },
  {
    title: "Garbage not collected",
    status: "Resolved",
    progress: 100,
  },
];

/* ======================
   DASHBOARD
====================== */

export default function Dashboard() {
  return (
    <div style={page}>
      <div style={container}>
        {/* HEADER */}
        <header style={header}>
          <h1 style={heading}>Citizen Dashboard</h1>
          <p style={subheading}>
            Monitor your complaints and track real-time progress
          </p>
        </header>

        {/* STATS */}
        <section style={statsGrid}>
          {stats.map((item, i) => (
            <div
              key={i}
              style={{
                ...statCard,
                borderTop: `5px solid ${item.color}`,
              }}
            >
              <span style={statIcon}>{item.icon}</span>
              <h2 style={{ color: item.color }}>{item.value}</h2>
              <p>{item.title}</p>
            </div>
          ))}
        </section>

        {/* RECENT COMPLAINTS */}
        <section style={complaintsSection}>
          <h2 style={sectionTitle}>📌 Recent Complaints</h2>

          {recentComplaints.map((c, i) => (
            <div key={i} style={complaintCard}>
              <div>
                <h3>{c.title}</h3>
                <p style={{ color: "#64748b" }}>{c.status}</p>
              </div>

              <div style={progressWrapper}>
                <div
                  style={{
                    ...progressBar,
                    width: `${c.progress}%`,
                  }}
                />
              </div>

              <span style={progressText}>{c.progress}%</span>
            </div>
          ))}
        </section>

        {/* INFO */}
        <section style={infoCard}>
          <h3>Why this dashboard matters</h3>
          <p>
            This dashboard ensures transparency, accountability, and faster
            resolution of public issues by providing real-time tracking and
            progress updates.
          </p>
        </section>
      </div>
    </div>
  );
}

/* ======================
   STYLES
====================== */

const page = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg, #e0e7ff, #fef3c7, #dcfce7)",
  display: "flex",
  justifyContent: "center",
  padding: "40px 20px",
  animation: "fadeIn 0.6s ease-in-out",
};

const container = {
  width: "100%",
  maxWidth: "1200px",
};

const header = {
  marginBottom: "30px",
};

const heading = {
  fontSize: "36px",
  fontWeight: "700",
  color: "#0f172a",
};

const subheading = {
  marginTop: "6px",
  color: "#475569",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: "20px",
  marginBottom: "40px",
};

const statCard = {
  background: "white",
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  transition: "transform 0.3s",
};

const statIcon = {
  fontSize: "28px",
  display: "block",
  marginBottom: "8px",
};

const complaintsSection = {
  marginBottom: "40px",
};

const sectionTitle = {
  marginBottom: "20px",
};

const complaintCard = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  marginBottom: "15px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const progressWrapper = {
  background: "#e5e7eb",
  borderRadius: "8px",
  height: "10px",
  marginTop: "10px",
  overflow: "hidden",
};

const progressBar = {
  height: "100%",
  background: "linear-gradient(to right, #2563eb, #16a34a)",
  transition: "width 0.6s ease",
};

const progressText = {
  fontSize: "13px",
  marginTop: "6px",
  color: "#334155",
};

const infoCard = {
  background: "white",
  padding: "26px",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};
