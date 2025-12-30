import "./HeatMap.css";

const data = [
  { day: "Mon", value: 2 },
  { day: "Tue", value: 6 },
  { day: "Wed", value: 10 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 8 },
  { day: "Sat", value: 1 },
  { day: "Sun", value: 0 },
];

export default function HeatMap() {
  const getLevel = (v) => {
    if (v === 0) return "level-0";
    if (v <= 2) return "level-1";
    if (v <= 5) return "level-2";
    if (v <= 8) return "level-3";
    return "level-4";
  };

  return (
    <div className="heatmap-card">
      <h3 className="heatmap-title">Complaint Activity</h3>
      <p className="heatmap-subtitle">
        Weekly complaint intensity
      </p>

      <div className="heatmap-row">
        {data.map((d, i) => (
          <div key={i} className="heatmap-col">
            <div
              className={`heatmap-cell ${getLevel(d.value)}`}
              title={`${d.value} complaints`}
            />
            <span>{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
