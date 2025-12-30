import PageWrapper from "../../components/common/PageWrapper.jsx";
import StatCard from "../../components/dashboard/StatCard";
import RecentComplaints from "../../components/dashboard/RecentComplaints";
import { dashboardStats } from "../../data/dashboardStats";
import { useComplaints } from "../../context/ComplaintContext";

export default function Dashboard() {
  const { complaints } = useComplaints();

  return (
    <PageWrapper>
      <h1>Citizen Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "30px",
        }}
      >
        <StatCard label="Total" value={dashboardStats.total} />
        <StatCard label="Pending" value={dashboardStats.pending} />
        <StatCard label="In Progress" value={dashboardStats.inProgress} />
        <StatCard label="Resolved" value={dashboardStats.resolved} />
      </div>

      <h2>Recent Complaints</h2>
      <RecentComplaints complaints={complaints} />
    </PageWrapper>
  );
}
