import "./BoardColumn.css";

export default function BoardColumn({ title, items = [], scroll = false }) {
  return (
    <div className={`board-column ${scroll ? "scrollable" : ""}`}>
      <h3 className="board-title">{title}</h3>

      <div className="board-items">
        {items.map((item, index) => (
          <div key={index} className="board-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
