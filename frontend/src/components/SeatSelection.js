import React, { useEffect, useState } from "react";
import screenicon from "../icons/screen-icon.8dd7f126.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

// Seat Component
const Seat = ({ id, selected, disabled, onClick }) => {
  return (
    <button
      className={`btn ${
        selected
          ? "btn-success"
          : disabled
          ? "btn-secondary"
          : "btn-outline-success"
      } me-2 `}
      type="button"
      onClick={() => onClick(id)}
      disabled={disabled}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {id}
    </button>
  );
};

// Seat Selection Component
const SeatSelection = () => {
  const [rowcount, setrows] = useState();
  const [columncount, setcolumns] = useState();
  const [divider, setdivider] = useState();
  const [silvercost, setsilvercost] = useState();
  const [goldcost, setgoldcost] = useState();
  const [bookedSeats, setBookedSeats] = useState([]);
  const theatreId = useParams().theatreId;
  const screenId = useParams().screenId;
  const date = useParams().date;
  const slot = useParams().slot;
  const { user } = useUser();
  const userId = user ? user.userId : undefined;
  const navigate = useNavigate();

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [month, day, year] = formattedDate.split("/");
  const rearrangedDate = `${year}-${month}-${day}`;

  const fetchSlots = async () => {
    const { data } = await axios.get(
      `/api/theatres/layout?theatreId=${theatreId}&screenId=${screenId}`
    );
    setrows(data[0].rows);
    setcolumns(data[0].columns);
    setdivider(data[0].divider);
    setsilvercost(data[0].silvercost);
    setgoldcost(data[0].goldcost);
  };

  const fetchBookedSeats = async () => {
    const response = await axios.get(
      `/api/theatres/booking?theatreId=${theatreId}&screenId=${screenId}&date=${rearrangedDate}&slot=${slot}`
    );
    setBookedSeats(response.data);
  };

  useEffect(() => {
    fetchSlots();
    fetchBookedSeats();
  }, []);

  const rows = Array.from({ length: rowcount }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const columns = Array.from({ length: columncount }, (_, i) => i + 1);
  const seats = rows.flatMap((row) =>
    columns.map((column) => ({
      id: `${row}${column}`,
      cost: row.charCodeAt(0) >= 64 + divider ? silvercost : goldcost,
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

  const handleclick = async (event) => {
    event.preventDefault();
    if (userId) {
      try {
        const response = await axios.post("/api/theatres/booking", {
          userId,
          theatreId,
          screenId,
          rearrangedDate,
          slot,
          totalCost,
          selectedSeats,
        });
        setSelectedSeats([]);
        navigate("/Booking-table");
      } catch (error) {
        console.error("Error adding booking:", error);
      }
    } else {
      console.error("User ID is not present"); // Log an error if userId is not present
    }
  };
  // Function to check if a seat is already booked
  const isSeatBooked = (id) => {
    return bookedSeats.some((seat) => seat.seats === id);
  };

  return (
    <div>
      <h2>Select Your Seats</h2>
      <div
        className="seat-map"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columncount}, 50px)`,
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
            disabled={isSeatBooked(seat.id)}
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
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "50px",
          }}
        >
          <p>Selected Seats: {selectedSeats.join(", ")}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Total Cost: Rs {totalCost}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            className="btn btn-outline-danger"
            id="signinsubmit"
            value="Book Tickets"
            onClick={handleclick}
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
