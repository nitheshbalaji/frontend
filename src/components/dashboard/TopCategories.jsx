import "./TopCategories.css";

export default function TopCategories() {
  const categories = [
    { name: "Roads", percent: 32 },
    { name: "Garbage", percent: 26 },
    { name: "Water", percent: 18 },
    { name: "Electricity", percent: 14 },
    { name: "Sanitation", percent: 10 },
  ];

  return (
    <div className="dashboard-card">
      <h3>Top Complaint Categories</h3>

      {categories.map((cat, i) => (
        <div key={i} className="category-row">
          <span>{cat.name}</span>
          <span>{cat.percent}%</span>
        </div>
      ))}
    </div>
  );
}
