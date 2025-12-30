import "./HeatMap.css";

export default function HeatMap() {
  // Mock data (later replace with backend)
  const heatmapData = [
    { day: "Mon", values: [2, 4, 6, 3, 1, 0] },
    { day: "Tue", values: [1, 3, 5, 7, 2, 4] },
    { day: "Wed", values: [0, 2, 4, 6, 8, 5] },
    { day: "Thu", values: [3, 5, 7, 9, 6, 4] },
    { day: "Fri", values: [4, 6, 8, 10, 7, 5] },
    { day: "Sat", values: [2, 4, 6, 5, 3, 1] },
    { day: "Sun", values: [1, 2, 3, 2, 1, 0] },
  ];

  return (
    <div className="heatmap-container">
      <h3 className="heatmap-title">Complaint Activity Heatmap</h3>
      <p className="heatmap-subtitle">
        Complaints intensity by day & time
      </p>

      <div className="heatmap-grid">
        {heatmapData.map((row, i) => (
          <div key={i} className="heatmap-row">
            <span className="heatmap-day">{row.day}</span>

            {row.values.map((value, j) => (
              <div
                key={j}
                className={`heatmap-cell level-${Math.min(value, 10)}`}
                title={`Complaints: ${value}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
