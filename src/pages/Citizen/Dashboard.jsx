import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ======================
   MOCK DATA
====================== */

const stats = [
  { title: "Total Complaints", value: 6, color: "#2563eb" },
  { title: "Pending", value: 2, color: "#dc2626" },
  { title: "In Progress", value: 2, color: "#f59e0b" },
  { title: "Resolved", value: 2, color: "#16a34a" },
];

const categoryData = [
  { name: "Water", value: 2 },
  { name: "Electricity", value: 2 },
  { name: "Sanitation", value: 1 },
  { name: "Roads", value: 1 },
];

const statusData = [
  { name: "Pending", value: 2, color: "#dc2626" },
  { name: "In Progress", value: 2, color: "#f59e0b" },
  { name: "Resolved", value: 2, color: "#16a34a" },
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

        {/* ANALYTICS */}
        <section style={analyticsGrid}>
          {/* Bar Chart */}
          <div style={sectionCard}>
            <h3 style={sectionTitle}>📊 Complaints by Category</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={categoryData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Donut Chart */}
          <div style={sectionCard}>
            <h3 style={sectionTitle}>⏱ Complaint Status</h3>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={statusData}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  paddingAngle={4}
                >
                  {statusData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
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
};

const overlay = {
  position: "absolute",
  inset: 0,
  backgroundImage:
    "url('https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=1600&q=60')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.08,
};

const container = {
  position: "relative",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "40px 20px",
};

const header = { marginBottom: "35px" };

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
};

const analyticsGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "24px",
};

const sectionCard = {
  background: "white",
  padding: "26px",
  borderRadius: "18px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
};

const sectionTitle = {
  marginBottom: "18px",
  fontSize: "20px",
  fontWeight: "600",
};
