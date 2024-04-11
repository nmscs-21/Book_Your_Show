import React from "react";

const Date = ({ date, month, selected, onSelect }) => {
  const handleClick = () => {
    onSelect(date);
  };
  return (
    <button
      className={`btn ${selected ? "btn-danger" : ""} me-5`}
      type="button"
      onClick={handleClick}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        {date}
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "11px",
        }}
      >
        {month}
      </div>
    </button>
  );
};

export default Date;
