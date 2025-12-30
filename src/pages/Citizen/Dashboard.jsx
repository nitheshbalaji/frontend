import "../../styles/dashboard.css";

/* Core dashboard components */
import BoardColumn from "../../components/dashboard/BoardColumn";
import StatMiniCard from "../../components/dashboard/StatMiniCard";
import HeatMap from "../../components/dashboard/HeatMap";

/* Intelligence components */
import CommunityActivity from "../../components/dashboard/CommunityActivity";
import AreaHealth from "../../components/dashboard/AreaHealth";
import TopCategories from "../../components/dashboard/TopCategories";

export default function Dashboard() {
  return (
    <div className="dashboard-root">

      {/* HEADER */}
      <h1 className="dashboard-title">Citizen Dashboard</h1>
      <p className="dashboard-subtitle">
        Track, understand, and improve your city in real time
      </p>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* ================= LEFT COLUMN ================= */}
        <BoardColumn
          title="Newly Registered Complaints"
          items={[
            "Street light not working",
            "Garbage not collected",
            "Water leakage near main road",
          ]}
        />

        {/* ================= CENTER COLUMN ================= */}
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

          {/* Workers / load section */}
          <div className="dashboard-card workers">
            <h3>Tickets Being Worked On</h3>

            <div className="workers-row">
              <StatMiniCard name="Sam" count="3" />
              <StatMiniCard name="Tom" count="2" />
              <StatMiniCard name="Jon" count="4" alert />
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="right-stack">

          {/* 🔥 MAIN VISUAL – HEATMAP (PRIORITY) */}
          <HeatMap />

          {/* Area intelligence */}
          <AreaHealth />

          <TopCategories />

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

          {/* Alerts */}
          <div className="dashboard-card highlight red">
            <h2>7</h2>
            <p>Unassigned Complaints</p>
          </div>

          <div className="dashboard-card highlight purple">
            <h2>3</h2>
            <p>Overdue Issues</p>
          </div>

          {/* Civic intelligence */}
          <CivicImpact />

          <CommunityActivity />

        </div>
      </div>
    </div>
  );
}
