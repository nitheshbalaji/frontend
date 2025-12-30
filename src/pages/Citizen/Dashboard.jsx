import React from "react";

/* ======================
   MOCK DATA (Citizen)
   ====================== */

const stats = [
  { label: "Total Complaints", value: 6, color: "#2563eb" },
  { label: "Pending", value: 2, color: "#dc2626" },
  { label: "In Progress", value: 2, color: "#f59e0b" },
  { label: "Resolved", value: 2, color: "#16a34a" },
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
  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
          Welcome 👋
        </h1>
        <p style={{ color: "#555" }}>
          Track and manage your complaints easily
        </p>
      </div>

      {/* Stats */}
      <div style={statsGrid}>
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              ...statCard,
              borderTopColor: item.color,
            }}
          >
            <p style={{ fontSize: "14px", color: "#555" }}>
              {item.label}
            </p>
            <h2 style={{ fontSize: "32px", marginTop: "6px" }}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Recent Complaints */}
      <div style={card}>
        <h3 style={cardTitle}>📂 Recent Complaints</h3>

        {complaints.map((c) => (
          <div key={c.id} style={complaintRow}>
            <div>
              <h4 style={{ margin: 0 }}>{c.title}</h4>
              <p style={{ fontSize: "13px", color: "#666" }}>
                Category: {c.category}
              </p>
            </div>

            <div style={{ minWidth: "160px" }}>
              <div style={progressBar}>
                <div
                  style={{
                    ...progressFill,
                    width: `${c.progress}%`,
                    backgroundColor:
                      c.status === "Pending"
                        ? "#dc2626"
                        : c.status === "In Progress"
                        ? "#f59e0b"
                        : "#16a34a",
                  }}
                />
              </div>
              <p style={{ fontSize: "12px", marginTop: "4px" }}>
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
  padding: "30px",
  background:
    "linear-gradient(135deg, #f8fafc, #eef2ff)",
  minHeight: "100vh",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const statCard = {
  background: "white",
  padding: "22px",
  borderRadius: "14px",
  borderTop: "5px solid",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const card = {
  background: "white",
  padding: "24px",
  borderRadius: "14px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const cardTitle = {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "18px",
};

const complaintRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 0",
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
