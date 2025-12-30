import "../../styles/dashboard.css";
import BoardColumn from "../../components/dashboard/BoardColumn";
import StatMiniCard from "../../components/dashboard/StatMiniCard";

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
        <div className="center-stack">
          <BoardColumn
            title="In Progress"
            scroll
            items={[
              "Road repair – Zone 3",
              "Drainage issue",
              "Power fluctuation",
              "Transformer failure",
              "Sewage overflow",
            ]}
          />

          <div className="dashboard-card workers">
            <h3>Tickets being worked on</h3>

            <div className="workers-row">
              <StatMiniCard name="Sam" count="3" />
              <StatMiniCard name="Tom" count="2" />
              <StatMiniCard name="Jon" count="4" alert />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="dashboard-card stats">
          <div>
            <h2>17</h2>
            <p>Today</p>
            <div className="progress green"></div>
          </div>

          <div>
            <h2>45</h2>
            <p>This week</p>
            <div className="progress blue"></div>
          </div>
        </div>

        <div className="dashboard-card highlight red">
          <h2>7</h2>
          <p>Unassigned</p>
        </div>

        <div className="dashboard-card highlight purple">
          <h2>3</h2>
          <p>Overdue</p>
        </div>

      </div>
    </div>
  );
}
