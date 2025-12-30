import "./AreaHealth.css";

export default function AreaHealth() {
  const status = "warning"; // "good" | "warning" | "critical"

  const labels = {
    good: "Healthy Area",
    warning: "Needs Attention",
    critical: "Critical Issues",
  };

  return (
    <div className={`dashboard-card area-health ${status}`}>
      <h3>Area Health</h3>
      <h2>{labels[status]}</h2>
      <p>
        Based on complaint volume & resolution speed
      </p>
    </div>
  );
}
