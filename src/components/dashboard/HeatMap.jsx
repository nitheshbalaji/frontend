import "./HeatMap.css";

const localityData = [
  {
    name: "Ward 1",
    complaints: 12,
    severity: 2,
  },
  {
    name: "Ward 2",
    complaints: 28,
    severity: 4,
  },
  {
    name: "Ward 3",
    complaints: 45,
    severity: 5,
  },
  {
    name: "Ward 4",
    complaints: 18,
    severity: 3,
  },
  {
    name: "Ward 5",
    complaints: 6,
    severity: 1,
  },
  {
    name: "Ward 6",
    complaints: 32,
    severity: 4,
  },
];

const getComplaintLevel = (count) => {
  if (count <= 5) return "low";
  if (count <= 15) return "medium";
  if (count <= 30) return "high";
  return "critical";
};

const getSeverityLevel = (sev) => {
  if (sev === 1) return "sev-low";
  if (sev === 2) return "sev-moderate";
  if (sev === 3) return "sev-high";
  return "sev-critical";
};

export default function HeatMap() {
  return (
    <div className="dashboard-card heatmap-wrapper">

      {/* COMPLAINT COUNT HEATMAP */}
      <div className="heatmap-section">
        <h3>Complaints by Locality</h3>
        <p className="heatmap-sub">
          Density of complaints across city areas
        </p>

        <div className="heatmap-grid">
          {localityData.map((loc) => (
            <div
              key={loc.name}
              className={`heatmap-tile ${getComplaintLevel(loc.complaints)}`}
              title={`${loc.complaints} complaints`}
            >
              <span>{loc.name}</span>
              <strong>{loc.complaints}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* SEVERITY HEATMAP */}
      <div className="heatmap-section">
        <h3>Severity by Locality</h3>
        <p className="heatmap-sub">
          Criticality of issues reported
        </p>

        <div className="heatmap-grid">
          {localityData.map((loc) => (
            <div
              key={loc.name}
              className={`heatmap-tile ${getSeverityLevel(loc.severity)}`}
              title={`Severity level ${loc.severity}`}
            >
              <span>{loc.name}</span>
              <strong>Level {loc.severity}</strong>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
