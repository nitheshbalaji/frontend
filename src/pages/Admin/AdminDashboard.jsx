import React from "react";

/* ======================
   MOCK DATA (TEMP)
   ====================== */

const stats = [
  { title: "Total Complaints", value: 128, color: "#2563eb" },
  { title: "Pending", value: 42, color: "#dc2626" },
  { title: "In Progress", value: 31, color: "#f59e0b" },
  { title: "Resolved", value: 55, color: "#16a34a" },
];

const recentComplaints = [
  {
    id: 1,
    title: "Street light not working",
    area: "Anna Nagar",
    category: "Electricity",
    status: "Pending",
  },
  {
    id: 2,
    title: "Water leakage on main road",
    area: "T Nagar",
    category: "Water",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Garbage not collected",
    area: "Velachery",
    category: "Sanitation",
    status: "Resolved",
  },
];

/* ======================
   DASHBOARD
   ====================== */

export default function AdminDashboard() {
  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "700" }}>
          Admin Dashboard
        </h1>
        <p style={{ color: "#555" }}>
          City-wide complaint monitoring & resolution overview
        </p>
      </div>

      {/* Stats Cards */}
      <div style={statsGrid}>
        {stats.map((item, index) => (
          <div key={index} style={{ ...statCard, borderTopColor: item.color }}>
            <h3 style={{ fontSize: "14px", color: "#555" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "32px", fontWeight: "700" }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div style={middleGrid}>
        {/* Heatmap Placeholder */}
        <div style={card}>
          <h3 style={cardTitle}>🔥 Complaint Heatmap</h3>
          <div style={heatmapBox}>
            <p style={{ color: "#666", textAlign: "center" }}>
              Heatmap showing complaint density by area
              <br />
              (Mock visualization for demo)
            </p>
          </div>
        </div>

        {/* Trend Chart Placeholder */}
        <div style={card}>
          <h3 style={cardTitle}>📈 Complaint Trends</h3>
          <div style={chartBox}>
            <p style={{ color: "#666", textAlign: "center" }}>
              Complaints trend (Last 7 / 30 days)
              <br />
              (Chart integration next)
            </p>
          </div>
        </div>
      </div>

      {/* Recent Complaints */}
      <div style={card}>
        <h3 style={cardTitle}>🚨 Recent Complaints</h3>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Area</th>
              <th>Category</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {recentComplaints.map((c) => (
              <tr key={c.id}>
                <td>{c.title}</td>
                <td>{c.area}</td>
                <td>{c.category}</td>
                <td>
                  <span
                    style={{
                      ...statusBadge,
                      backgroundColor:
                        c.status === "Pending"
                          ? "#fee2e2"
                          : c.status === "In Progress"
                          ? "#fef3c7"
                          : "#dcfce7",
                      color:
                        c.status === "Pending"
                          ? "#dc2626"
                          : c.status === "In Progress"
                          ? "#b45309"
                          : "#166534",
                    }}
                  >
                    {c.status}
                  </span>
                </td>
                <td>
                  <button style={viewBtn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ======================
   STYLES
   ====================== */

const pageStyle = {
  padding: "30px",
  background: "#f8fafc",
  minHeight: "100vh",
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

const middleGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginBottom: "30px",
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
  marginBottom: "16px",
};

const heatmapBox = {
  height: "220px",
  background: "linear-gradient(135deg, #e0f2fe, #fef3c7)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const chartBox = {
  height: "220px",
  background: "linear-gradient(135deg, #ede9fe, #dbeafe)",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
};

const statusBadge = {
  padding: "6px 12px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: "600",
};

const viewBtn = {
  padding: "6px 14px",
  borderRadius: "6px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};
