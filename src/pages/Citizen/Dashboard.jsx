import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="cd-root">
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

        {/* DONE */}
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

         {/* HEATMAP */}
<div className="cd-card wide glass" style={{ border: "2px dashed #60a5fa" }}>
  <h3 style={{ color: "#93c5fd", fontSize: "22px" }}>
    🔥 Complaint Heatmap (Area-wise)
  </h3>

  <div className="cd-heatmap">
    {heatmapData.map((item, index) => (
      <div
        key={index}
        className="cd-heat-cell"
        style={{
          background: getHeatColor(item.count),
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      >
        <span className="cd-area">{item.area}</span>
        <span className="cd-count">{item.count}</span>
      </div>
    ))}
  </div>
</div>

            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

      </div>
    </div>
  );
}
