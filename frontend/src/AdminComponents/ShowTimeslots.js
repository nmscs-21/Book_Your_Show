// ShowTimeSlots.jsx

import React, { useState, useEffect } from "react";
import AddTimeSlotForm from "./AddTimeSlotForm";
import UpdateTimeSlotForm from "./UpdateTimeSlotForm";
import DeleteTimeSlotForm from "./DeleteTimeSlotForm";
import axios from "axios";

const ShowTimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  const fetchTimeSlots = async () => {
    const { data } = await axios.get(`/api/theatres/TimeSlots`);
    console.log(data);
    setTimeSlots(data);
  };

  useEffect(() => {
    fetchTimeSlots();
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
            <tr key={slot.slotId}>
              <td>{slot.slotId}</td>
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
