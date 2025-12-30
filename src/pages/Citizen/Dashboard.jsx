import "../../styles/dashboard.css";

import StatCard from "../../components/dashboard/StatCard";
import HeatMap from "../../components/dashboard/HeatMap";
import TrendChart from "../../components/dashboard/TrendChart";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import ComplaintProgress from "../../components/dashboard/ComplaintProgress";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* ================= LEFT COLUMN ================= */}
      <div className="dashboard-left">
        <RecentComplaints title="To Do" />
        <RecentComplaints title="Requested by Support" />

        <StatCard
          title="Unassigned Tickets"
          value="7"
          variant="danger"
        />
      </div>

      {/* ================= CENTER COLUMN ================= */}
      <div className="dashboard-center">
        <ComplaintProgress />

        <div className="workers-card">
          <h3>Tickets being worked on</h3>
          <div className="workers">
            <StatCard title="Sam" value="3" />
            <StatCard title="Tom" value="2" />
            <StatCard title="Jon" value="4" alert />
          </div>
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="dashboard-right">

        <div className="done-card">
          <StatCard title="Resolved Today" value="17" variant="success" />
          <StatCard title="Resolved This Week" value="45" variant="info" />
        </div>

        <StatCard
          title="Overdue"
          value="3"
          variant="warning"
          alert
        />

        <TrendChart />

        {/* 🔥 HEATMAP */}
        <HeatMap />
      </div>

    </div>
  );
}
