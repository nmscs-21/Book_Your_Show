import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import axios from "axios";

const Userbookings = () => {
  const [bookings, setbookings] = useState([]);
  const { user } = useUser();
  const fetchbookings = async () => {
    const { data } = await axios.get(`/api/movies/${user.userId}/userbookings`);
    setbookings(data);
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [month, day, year] = formattedDate.split("/");
    const rearrangedDate = `${year}-${month}-${day}`;
    return rearrangedDate;
  };

  useEffect(() => {
    if (user) fetchbookings();
  }, [user]);
  return (
    <div>
      <h2>Bookings</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Movie Name</th>
            <th>Theatre Name</th>
            <th>Screen</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cost</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{booking.movieName}</td>
              <td>{booking.theatreName}</td>
              <td>Screen {booking.screenId}</td>
              <td>{formatDate(booking.date)}</td>
              <td>{booking.time}</td>
              <td>{booking.cost}</td>
              <td>{booking.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userbookings;
