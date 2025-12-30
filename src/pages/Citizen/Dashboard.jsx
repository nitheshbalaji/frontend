import React from "react";
//import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-root">
      <h1 className="dashboard-title">Citizen Dashboard</h1>

      <div className="dashboard-grid">

        {/* TO DO */}
        <div className="card tall">
          <h3>To Do</h3>
          <ul className="list">
            <li>Street light not working</li>
            <li>Garbage not collected</li>
            <li>Water leakage</li>
          </ul>
        </div>

        {/* IN PROGRESS */}
        <div className="card tall">
          <h3>In Progress</h3>
          <ul className="list">
            <li>Road damage repair</li>
            <li>Drainage issue</li>
            <li>Power fluctuation</li>
          </ul>
        </div>

        {/* DONE */}
        <div className="card">
          <h3>Done</h3>
          <div className="stats">
            <div>
              <h2>5</h2>
              <p>Today</p>
            </div>
            <div>
              <h2>18</h2>
              <p>This week</p>
            </div>
          </div>
        </div>

        {/* UNASSIGNED */}
        <div className="card highlight">
          <h2>7</h2>
          <p>Unassigned Complaints</p>
        </div>

        {/* OVERDUE */}
        <div className="card danger">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

        {/* TICKETS BY YOU */}
        <div className="card wide">
          <h3>Your Complaints</h3>
          <div className="mini-cards">
            <div className="mini">2<br /><span>Electricity</span></div>
            <div className="mini">3<br /><span>Water</span></div>
            <div className="mini">1<br /><span>Road</span></div>
          </div>
        </div>

        {/* GRAPH PLACEHOLDER */}
        <div className="card wide">
          <h3>Complaints Trend</h3>
          <div className="fake-chart">
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
