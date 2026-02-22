export const Filter = ({ onFilterChange, activeFilter }) => {
  return (
    <div className="filter">
      <button
        onClick={() => onFilterChange("завтрак")}
        className={`filterSelect ${activeFilter === "завтрак" ? "active" : ""}`}
      >
        завтрак
      </button>
      <button
        onClick={() => onFilterChange("обед")}
        className={`filterSelect ${activeFilter === "обед" ? "active" : ""}`}
      >
        обед
      </button>
      <button
        onClick={() => onFilterChange("ужин")}
        className={`filterSelect ${activeFilter === "ужин" ? "active" : ""}`}
      >
        ужин
      </button>
    </div>
  );
};
