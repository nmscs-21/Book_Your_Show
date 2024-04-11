import React, { useState } from "react";

// Seat Component
const Seat = ({ id, selected, onClick }) => {
  return (
    <button
      className={`btn ${
        selected ? "btn-success" : "btn-outline-success"
      } me-2 mb-2`}
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
  const seats = [
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
    { id: 4, selected: false },
    { id: 5, selected: false },
    { id: 6, selected: false },
    { id: 7, selected: false },
    { id: 8, selected: false },
    { id: 9, selected: false },
    { id: 10, selected: false },
  ];

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

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div
        className="seat-map"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 50px)", // Adjust the column width as needed
          gap: "5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {seats.map((seat) => (
          <Seat
            key={seat.id}
            id={seat.id}
            selected={selectedSeats.includes(seat.id)}
            onClick={handleSeatClick}
          />
        ))}
      </div>
      <p>Selected Seats: {selectedSeats.join(", ")}</p>
      {/* Add a button to proceed to payment */}
    </div>
  );
};

export default SeatSelection;
