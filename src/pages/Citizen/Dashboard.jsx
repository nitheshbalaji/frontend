import "../../styles/dashboard.css";

/* Core components */
import BoardColumn from "../../components/dashboard/BoardColumn";
import StatMiniCard from "../../components/dashboard/StatMiniCard";
import HeatMap from "../../components/dashboard/HeatMap";

/* Intelligence widgets */
import AreaHealth from "../../components/dashboard/AreaHealth";
import TopCategories from "../../components/dashboard/TopCategories";
import CommunityActivity from "../../components/dashboard/CommunityActivity";

export default function Dashboard() {
  return (
    <div className="dashboard-root">

      {/* ================= HEADER ================= */}
      <h1 className="dashboard-title">Citizen Dashboard</h1>
      <p className="dashboard-subtitle">
        Understand complaint patterns, severity, and city health in real time
      </p>

      {/* ================= GRID ================= */}
      <div className="dashboard-grid">

        {/* ========== LEFT COLUMN ========== */}
        <div className="left-stack">
          <BoardColumn
            title="New Complaints"
            items={[
              "Street light not working",
              "Garbage not collected",
              "Water leakage near main road",
            ]}
          />

          <div className="dashboard-card highlight red">
            <h2>7</h2>
            <p>Unassigned Complaints</p>
          </div>
        </div>

        {/* ========== CENTER COLUMN ========== */}
        <div className="center-stack">
          <BoardColumn
            title="Under Active Resolution"
            scroll
            items={[
              "Road repair – Zone 3",
              "Drainage issue – Ward 7",
              "Power fluctuation",
              "Transformer failure",
              "Sewage overflow",
            ]}
          />

          <div className="dashboard-card workers">
            <h3>Tickets Being Worked On</h3>

            <div className="workers-row">
              <StatMiniCard name="Sam" count="3" />
              <StatMiniCard name="Tom" count="2" />
              <StatMiniCard name="Jon" count="4" alert />
            </div>
          </div>
        </div>

        {/* ========== RIGHT COLUMN ========== */}
        <div className="right-stack">

          {/* Resolution stats */}
          <div className="dashboard-card stats">
            <div>
              <h2>17</h2>
              <p>Resolved Today</p>
              <div className="progress green"></div>
            </div>

            <div>
              <h2>45</h2>
              <p>This Week</p>
              <div className="progress blue"></div>
            </div>
          </div>

          <div className="dashboard-card highlight purple">
            <h2>3</h2>
            <p>Overdue Issues</p>
          </div>

          {/* ================= HEATMAPS ================= */}
          <HeatMap />

          {/* ================= INSIGHTS ================= */}
          <AreaHealth />
          <TopCategories />
          <CommunityActivity />

        </div>
      </div>
    </div>
  );
}
