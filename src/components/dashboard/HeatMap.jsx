import React from "react";

const heatData = [
  { area: "Anna Nagar", count: 12 },
  { area: "T Nagar", count: 22 },
  { area: "Velachery", count: 8 },
  { area: "Guindy", count: 18 },
  { area: "Adyar", count: 5 },
  { area: "Tambaram", count: 15 },
];

const getColor = (count) => {
  if (count > 20) return "#ef4444";   // red
  if (count > 15) return "#f97316";   // orange
  if (count > 10) return "#facc15";   // yellow
  return "#4ade80";                   // green
};

export default function HeatMap() {
  return (
    <div style={container}>
      <h3 style={title}>Complaint Heatmap (Area-wise)</h3>

      <div style={grid}>
        {heatData.map((item, index) => (
          <div
            key={index}
            style={{
              ...cell,
              background: getColor(item.count),
            }}
          >
            <span style={area}>{item.area}</span>
            <span style={count}>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== styles ===== */

const container = {
  marginTop: "40px",
  padding: "28px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(12px)",
};

const title = {
  color: "#e5e7eb",
  fontSize: "20px",
  marginBottom: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "16px",
};

const cell = {
  height: "110px",
  borderRadius: "16px",
  padding: "14px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  color: "#111827",
  fontWeight: "600",
  transition: "transform 0.25s ease",
};

const area = {
  fontSize: "14px",
};

const count = {
  fontSize: "26px",
};
