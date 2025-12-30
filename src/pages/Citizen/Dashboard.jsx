import React from "react";

/* ======================
   MOCK DATA
====================== */

const stats = [
  { title: "Total Complaints", value: 6, color: "#2563eb" },
  { title: "Pending", value: 2, color: "#dc2626" },
  { title: "In Progress", value: 2, color: "#f59e0b" },
  { title: "Resolved", value: 2, color: "#16a34a" },
];

const areaHeatmap = [
  { area: "Anna Nagar", level: "high" },
  { area: "T Nagar", level: "medium" },
  { area: "Adyar", level: "low" },
];

const complaints = [
  { title: "Street light not working", status: "Pending" },
  { title: "Water leakage near road", status: "In Progress" },
  { title: "Garbage not collected", status: "Resolved" },
];

/* ======================
   DASHBOARD
====================== */

export default function Dashboard() {
  return (
    <div style={page}>
      <div style={overlay} />

      <div style={container}>
        {/* HEADER */}
        <section style={header}>
          <h1 style={heading}>Good evening 👋</h1>
          <p style={subheading}>
            Here’s what’s happening around you today
          </p>
        </section>

        {/* STATS */}
        <section style={statsGrid}>
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                ...statCard,
                borderTop: `5px solid ${s.color}`,
              }}
            >
              <h2 style={{ color: s.color }}>{s.value}</h2>
              <p>{s.title}</p>
            </div>
          ))}
        </section>

        {/* AREA HEATMAP */}
        <section style={sectionCard}>
          <h3 style={sectionTitle}>🔥 Complaint Density by Area</h3>
          <div style={heatmapGrid}>
            {areaHeatmap.map((a, i) => (
              <div
                key={i}
                style={{
                  ...heatCell,
                  background:
                    a.level === "high"
                      ? "#fecaca"
                      : a.level === "medium"
                      ? "#fde68a"
                      : "#bbf7d0",
                }}
              >
                <strong>{a.area}</strong>
                <span style={{ fontSize: "13px" }}>
                  {a.level.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ANALYTICS */}
        <section style={analyticsGrid}>
          <div style={sectionCard}>
            <h3 style={sectionTitle}>📊 Complaints by Category</h3>
            <div style={placeholder}>
              Bar Chart (Infrastructure, Water, Electricity)
            </div>
          </div>

          <div style={sectionCard}>
            <h3 style={sectionTitle}>⏱ Resolution Status</h3>
            <div style={placeholder}>
              Donut Chart (Pending / Progress / Resolved)
            </div>
          </div>
        </section>

        {/* CITY MAP HEATMAP */}
        <section style={sectionCard}>
          <h3 style={sectionTitle}>🗺 City Heatmap View</h3>
          <div style={mapPlaceholder}>
            City Map Heatmap (Zoom & Explore)
          </div>
        </section>

        {/* RECENT COMPLAINTS */}
        <section style={sectionCard}>
          <h3 style={sectionTitle}>🧾 Recent Complaints</h3>
          {complaints.map((c, i) => (
            <div key={i} style={complaintRow}>
              <span>{c.title}</span>
              <span style={statusBadge(c.status)}>
                {c.status}
              </span>
            </div>
          ))}
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
  position: "relative",
  background:
    "linear-gradient(135deg, #eef2ff, #fef3c7, #dcfce7)",
  overflowX: "hidden",
};

const overlay = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "url('https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1600&q=60')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.08,
  zIndex: 0,
};

const container = {
  position: "relative",
  zIndex: 1,
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px",
};

const header = {
  marginBottom: "35px",
};

const heading = {
  fontSize: "38px",
  fontWeight: "700",
  color: "#0f172a",
};

const subheading = {
  marginTop: "6px",
  color: "#475569",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

const sectionCard = {
  background: "white",
  padding: "26px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  marginBottom: "35px",
};

const sectionTitle = {
  marginBottom: "18px",
  fontSize: "20px",
  fontWeight: "600",
};

const heatmapGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "16px",
};

const heatCell = {
  padding: "18px",
  borderRadius: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const analyticsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
};

const placeholder = {
  height: "160px",
  background: "#f1f5f9",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#64748b",
};

const mapPlaceholder = {
  height: "280px",
  background: "#e5e7eb",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#475569",
};

const complaintRow = {
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 0",
  borderBottom: "1px solid #e5e7eb",
};

const statusBadge = (status) => ({
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "13px",
  background:
    status === "Pending"
      ? "#fee2e2"
      : status === "In Progress"
      ? "#fef3c7"
      : "#dcfce7",
  color:
    status === "Pending"
      ? "#dc2626"
      : status === "In Progress"
      ? "#f59e0b"
      : "#16a34a",
});
