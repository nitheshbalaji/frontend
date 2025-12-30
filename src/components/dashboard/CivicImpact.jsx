import "./CivicImpact.css";

export default function CivicImpact() {
  return (
    <div className="dashboard-card impact-card">
      <h3>Your Civic Impact</h3>
      <h1>12</h1>
      <p>Issues helped resolve this month</p>

      <div className="impact-bar">
        <div className="impact-fill" style={{ width: "70%" }} />
      </div>

      <span className="impact-note">
        You’re making your locality better 💙
      </span>
    </div>
  );
}
