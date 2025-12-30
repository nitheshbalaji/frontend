import "./HeatMap.css";

const mockData = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 6 },
  { day: "Wed", value: 10 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 8 },
  { day: "Sat", value: 1 },
  { day: "Sun", value: 0 },
];

export default function HeatMap() {
  const getIntensityClass = (value) => {
    if (value === 0) return "level-0";
    if (value <= 2) return "level-1";
    if (value <= 5) return "level-2";
    if (value <= 8) return "level-3";
    return "level-4";
  };

  return (
    <div className="heatmap-card">
      <h3>Complaint Heatmap</h3>
      <p className="heatmap-sub">Complaints registered this week</p>

      <div className="heatmap-grid">
        {mockData.map((item, index) => (
          <div key={index} className="heatmap-cell-wrapper">
            <div
              className={`heatmap-cell ${getIntensityClass(item.value)}`}
              title={`${item.value} complaints`}
            />
            <span className="heatmap-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
