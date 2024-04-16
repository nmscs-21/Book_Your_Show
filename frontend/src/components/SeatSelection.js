import React, { useState } from "react";
import screenicon from "../icons/screen-icon.8dd7f126.svg";

// Seat Component
const Seat = ({ id, selected, onClick }) => {
  return (
    <button
      className={`btn ${
        selected ? "btn-success" : "btn-outline-success"
      } me-2 `}
      type="button"
      onClick={() => onClick(id)}
    >
      {id}
    </button>
  );
};

// Seat Selection Component
const SeatSelection = () => {
  // Sample seat data
  const rows = ["A", "B", "C", "D", "E"];
  const columns = Array.from({ length: 10 }, (_, i) => i + 1);
  const seats = rows.flatMap((row) =>
    columns.map((column) => ({
      id: `${row}${column}`,
      cost: row.charCodeAt(0) <= 66 ? 100 : 150, // Assign different costs based on row
    }))
  );

  // State to track selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Function to handle seat selection
  const handleSeatClick = (id) => {
    const seatIndex = selectedSeats.indexOf(id);
    if (seatIndex > -1) {
      setSelectedSeats(selectedSeats.filter((seatId) => seatId !== id));
    } else {
      setSelectedSeats([...selectedSeats, id]);
    }
  };

  // Calculate total cost
  const totalCost = selectedSeats.reduce((acc, seatId) => {
    const seat = seats.find((seat) => seat.id === seatId);
    return acc + seat.cost;
  }, 0);

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div
        className="seat-map"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 50px)", // Adjust the column width as needed
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            cost={seat.cost}
            selected={selectedSeats.includes(seat.id)}
            onClick={handleSeatClick}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <img
          src={screenicon}
          alt={screenicon}
          className="avatar"
          style={{ width: "500px", height: "auto", display: "block" }}
        />
      </div>
      <p>Selected Seats: {selectedSeats.join(", ")}</p>
      <p>Total Cost: Rs {totalCost}</p>
      {/* Add a button to proceed to payment */}
    </div>
  );
};

export default SeatSelection;
