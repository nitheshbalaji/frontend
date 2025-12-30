import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

/* ---------------- MOCK DATA ---------------- */

const heatmapData = [
  { area: "Anna Nagar", count: 12 },
  { area: "T Nagar", count: 22 },
  { area: "Velachery", count: 9 },
  { area: "Tambaram", count: 18 },
  { area: "Adyar", count: 6 },
  { area: "Guindy", count: 14 },
];

const getHeatColor = (count) => {
  if (count > 20) return "#ef4444"; // red
  if (count > 15) return "#f97316"; // orange
  if (count > 10) return "#facc15"; // yellow
  return "#4ade80"; // green
};

/* ---------------- COMPONENT ---------------- */

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="cd-root" style={{ position: "relative" }}>
      {/* BACK BUTTON → HOME */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          border: "none",
          background: "#111827",
          color: "white",
          fontSize: "20px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          zIndex: 1000,
        }}
        aria-label="Go back to home"
      >
        ←
      </button>

      <h1 className="cd-title">Citizen Dashboard</h1>
      <p className="cd-subtitle">
        Track and manage your complaints in real time
      </p>

      <div className="cd-grid">
        {/* TO DO */}
        <div className="cd-card glass blue">
          <h3>To Do</h3>
          <ul>
            <li>Street light not working</li>
            <li>Garbage not collected</li>
            <li>Water leakage</li>
          </ul>
        </div>

        {/* IN PROGRESS */}
        <div className="cd-card glass orange">
          <h3>In Progress</h3>
          <ul>
            <li>Road damage repair</li>
            <li>Drainage issue</li>
            <li>Power fluctuation</li>
          </ul>
        </div>

        {/* RESOLVED */}
        <div className="cd-card glass green">
          <h3>Resolved</h3>
          <div className="cd-stats">
            <div>
              <h2>5</h2>
              <span>Today</span>
            </div>
            <div>
              <h2>18</h2>
              <span>This week</span>
            </div>
          </div>
        </div>

        {/* UNASSIGNED */}
        <div className="cd-card highlight red">
          <h2>7</h2>
          <p>Unassigned Complaints</p>
        </div>

        {/* OVERDUE */}
        <div className="cd-card highlight purple">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

        {/* TREND */}
        <div className="cd-card wide glass">
          <h3>Complaints Trend</h3>
          <div className="cd-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* HEATMAP */}
        <div className="cd-card wide glass heatmap-card">
          <h3>🔥 Area-wise Complaint Heatmap</h3>
          <p className="heatmap-sub">
            Darker color indicates higher number of complaints
          </p>

          <div className="cd-heatmap">
            {heatmapData.map((item, index) => (
              <div
                key={index}
                className="cd-heat-cell"
                style={{ background: getHeatColor(item.count) }}
              >
                <span className="cd-area">{item.area}</span>
                <span className="cd-count">{item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
