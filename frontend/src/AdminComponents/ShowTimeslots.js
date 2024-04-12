// ShowTimeSlots.jsx

import React, { useState, useEffect } from "react";
import AddTimeSlotForm from "./AddTimeSlotForm";
import UpdateTimeSlotForm from "./UpdateTimeSlotForm";
import DeleteTimeSlotForm from "./DeleteTimeSlotForm";

const ShowTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  useEffect(() => {
    // Fetch time slots from the database
    // Example: fetch('/api/time-slots').then(response => response.json()).then(data => setTimeSlots(data));
    // Replace the above line with your actual API call to fetch time slot data
    // For demonstration purpose, I'm setting time slots manually
    const fetchedTimeSlots = [
      {
        id: 1,
        screenId: 1,
        theatreId: 1,
        date: "2022-01-01",
        slot: "10:00 AM",
      },
      {
        id: 2,
        screenId: 1,
        theatreId: 1,
        date: "2022-01-01",
        slot: "01:00 PM",
      },
      {
        id: 3,
        screenId: 2,
        theatreId: 1,
        date: "2022-01-02",
        slot: "12:00 PM",
      },
    ];
    setTimeSlots(fetchedTimeSlots);
  }, []);

  return (
    <div>
      <h2>Time Slots</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Screen ID</th>
            <th>Theatre ID</th>
            <th>Date</th>
            <th>Slot</th>
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((slot) => (
            <tr key={slot.id}>
              <td>{slot.id}</td>
              <td>{slot.screenId}</td>
              <td>{slot.theatreId}</td>
              <td>{slot.date}</td>
              <td>{slot.slot}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "20px" }}>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("add")}
          >
            Add TimeSlots
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update TimeSlots
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete TimeSlots
          </button>
        </div>

        {activeForm === "add" && <AddTimeSlotForm />}
        {activeForm === "update" && <UpdateTimeSlotForm />}
        {activeForm === "delete" && <DeleteTimeSlotForm />}
      </div>
    </div>
  );
};

export default ShowTimeSlots;
