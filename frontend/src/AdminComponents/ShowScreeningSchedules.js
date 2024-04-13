// ShowScreeningSchedules.jsx

import React, { useState, useEffect } from "react";
import AddScreeningScheduleForm from "./AddScreeningScheduleForm";
import UpdateScreeningScheduleForm from "./UpdateScreeningSchedule";
import DeleteScreeningScheduleForm from "./DeleteScreeningSchedule";

const ShowScreeningSchedules = () => {
  const [screeningSchedules, setScreeningSchedules] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  useEffect(() => {
    // Fetch screening schedules from the database
    // Example: fetch('/api/screening-schedules').then(response => response.json()).then(data => setScreeningSchedules(data));
    // Replace the above line with your actual API call to fetch screening schedule data
    // For demonstration purpose, I'm setting screening schedules manually
    const fetchedScreeningSchedules = [
      { id: 1, screenId: 1, theatreId: 1, date: "2022-01-01", movieId: 1 },
      { id: 2, screenId: 1, theatreId: 1, date: "2022-01-01", movieId: 2 },
      { id: 3, screenId: 2, theatreId: 1, date: "2022-01-02", movieId: 3 },
    ];
    setScreeningSchedules(fetchedScreeningSchedules);
  }, []);

  return (
    <div>
      <h2>Screening Schedules</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Screen ID</th>
            <th>Theatre ID</th>
            <th>Date</th>
            <th>Movie ID</th>
          </tr>
        </thead>
        <tbody>
          {screeningSchedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.id}</td>
              <td>{schedule.screenId}</td>
              <td>{schedule.theatreId}</td>
              <td>{schedule.date}</td>
              <td>{schedule.movieId}</td>
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
            Add ScreeningSchedules
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update ScreeningSchedules
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete ScreeningSchedules
          </button>
        </div>

        {activeForm === "add" && <AddScreeningScheduleForm />}
        {activeForm === "update" && <UpdateScreeningScheduleForm />}
        {activeForm === "delete" && <DeleteScreeningScheduleForm />}
      </div>
    </div>
  );
};

export default ShowScreeningSchedules;
