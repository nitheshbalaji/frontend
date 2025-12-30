export default function StatCard({ label, value }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.1)"
    }}>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}
