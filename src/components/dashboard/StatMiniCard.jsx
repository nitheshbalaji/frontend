import "./StatMiniCard.css";

export default function StatMiniCard({ name, count, alert }) {
  return (
    <div className={`stat-mini ${alert ? "alert" : ""}`}>
      <h2>{count}</h2>
      <span>{name}</span>
      {alert && <div className="alert-dot">!</div>}
    </div>
  );
}
