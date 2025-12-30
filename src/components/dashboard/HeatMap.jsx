import "./HeatMap.css";

const heatmapData = [
  { day: "Mon", values: [1, 3, 5, 2, 0, 1] },
  { day: "Tue", values: [2, 4, 6, 3, 1, 2] },
  { day: "Wed", values: [4, 6, 9, 5, 3, 2] },
  { day: "Thu", values: [3, 5, 8, 6, 4, 3] },
  { day: "Fri", values: [5, 7, 10, 8, 6, 4] },
  { day: "Sat", values: [2, 3, 4, 3, 2, 1] },
  { day: "Sun", values: [1, 2, 2, 1, 0, 0] },
];

export default function HeatMap() {
  const getLevel = (value) => {
    if (value === 0) return "l0";
    if (value <= 2) return "l1";
    if (value <= 4) return "l2";
    if (value <= 6) return "l3";
    if (value <= 8) return "l4";
    return "l5";
  };

  return (
    <div className="dashboard-card heatmap-main">
      <h3>City Complaint Heatmap</h3>
      <p className="heatmap-desc">
        Complaint density by day and time (last 7 days)
      </p>

      <div className="heatmap-wrapper">
        <div className="heatmap-hours">
          <span>6 AM</span>
          <span>9 AM</span>
          <span>12 PM</span>
          <span>3 PM</span>
          <span>6 PM</span>
          <span>9 PM</span>
        </div>

        <div className="heatmap-grid">
          {heatmapData.map((row, i) => (
            <div key={i} className="heatmap-row">
              <span className="heatmap-day">{row.day}</span>

              {row.values.map((val, j) => (
                <div
                  key={j}
                  className={`heatmap-cell ${getLevel(val)}`}
                  title={`${val} complaints`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* LEGEND */}
      <div className="heatmap-legend">
        <span>Low</span>
        <div className="legend-box l1" />
        <div className="legend-box l2" />
        <div className="legend-box l3" />
        <div className="legend-box l4" />
        <div className="legend-box l5" />
        <span>High</span>
      </div>
    </div>
  );
}
