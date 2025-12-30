import "../../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-root">

      <h1 className="dashboard-title">Citizen Dashboard</h1>
      <p className="dashboard-subtitle">
        Track and manage your complaints in real time
      </p>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* TO DO */}
        <div className="dashboard-card column">
          <h3 className="card-title">To Do</h3>
          <ul>
            <li>Street light not working</li>
            <li>Garbage not collected</li>
            <li>Water leakage</li>
          </ul>
        </div>

        {/* IN PROGRESS */}
        <div className="dashboard-card column">
          <h3 className="card-title">In Progress</h3>
          <ul>
            <li>Road repair – Zone 3</li>
            <li>Drainage issue</li>
            <li>Power fluctuation</li>
            <li>Sewage overflow</li>
          </ul>
        </div>

        {/* DONE */}
        <div className="dashboard-card stats">
          <h3 className="card-title">Resolved</h3>

          <div className="stats-row">
            <div>
              <h2>17</h2>
              <span>Today</span>
            </div>
            <div>
              <h2>45</h2>
              <span>This week</span>
            </div>
          </div>
        </div>

        {/* UNASSIGNED */}
        <div className="dashboard-card highlight red">
          <h2>7</h2>
          <p>Unassigned Complaints</p>
        </div>

        {/* OVERDUE */}
        <div className="dashboard-card highlight purple">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

      </div>
    </div>
  );
}
