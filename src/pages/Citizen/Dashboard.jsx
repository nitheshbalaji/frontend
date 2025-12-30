import React from "react";
import Heatmap from "../../components/Heatmap";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="cd-root">
      <h1 className="cd-title">Citizen Dashboard</h1>
      <p className="cd-subtitle">
        Track and manage your complaints in real time
      </p>

      <div className="cd-grid">

        <div className="cd-card glass blue">
          <h3>To Do</h3>
          <ul>
            <li>Street light not working</li>
            <li>Garbage not collected</li>
            <li>Water leakage</li>
          </ul>
        </div>

        <div className="cd-card glass orange">
          <h3>In Progress</h3>
          <ul>
            <li>Road damage repair</li>
            <li>Drainage issue</li>
            <li>Power fluctuation</li>
          </ul>
        </div>

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

        <div className="cd-card highlight red">
          <h2>7</h2>
          <p>Unassigned Complaints</p>
        </div>

        <div className="cd-card highlight purple">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

        {/* 🔥 HEATMAP ADDED */}
        <div className="cd-card wide">
          <Heatmap />
        </div>

      </div>
    </div>
  );
}
