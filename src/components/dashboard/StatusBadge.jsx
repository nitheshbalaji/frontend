export default function StatusBadge({ status }) {
  const colors = {
    Pending: "#dc2626",
    "In Progress": "#f59e0b",
    Resolved: "#16a34a",
  };

  return (
    <span style={{
      color: colors[status],
      fontWeight: "600"
    }}>
      {status}
    </span>
  );
}
