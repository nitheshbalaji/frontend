import "../../styles/dashboard.css";
import BoardColumn from "../../components/dashboard/BoardColumn";

export default function Dashboard() {
  return (
    <div className="dashboard-root">

      <h1 className="dashboard-title">Citizen Dashboard</h1>
      <p className="dashboard-subtitle">
        Track and manage your complaints in real time
      </p>

      <div className="dashboard-grid">

        {/* LEFT */}
        <BoardColumn
          title="To Do"
          items={[
            "Street light not working",
            "Garbage not collected",
            "Water leakage",
          ]}
        />

        {/* CENTER */}
        <BoardColumn
          title="In Progress"
          scroll
          items={[
            "Road repair – Zone 3",
            "Drainage issue",
            "Power fluctuation",
            "Transformer failure",
            "Sewage overflow",
            "Street light upgrade",
          ]}
        />

        {/* RIGHT */}
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

        <div className="dashboard-card highlight red">
          <h2>7</h2>
          <p>Unassigned Complaints</p>
        </div>

        <div className="dashboard-card highlight purple">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

      </div>
    </div>
  );
}
