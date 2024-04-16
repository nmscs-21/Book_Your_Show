import React, { useState, useEffect } from "react";
import axios from "axios";

const AddScreeningScheduleForm = () => {
  const [theatreId, settheatreId] = useState([]);
  const [screenId, setscreenId] = useState([]);
  const [date, setDate] = useState("");
  const [movieId, setmovieId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/theatres/ScreeningSchedules", {
        theatreId,
        screenId,
        date,
        movieId,
      });
      console.log(response.data);
      settheatreId("");
      setscreenId("");
      setDate("");
      setmovieId("");
    } catch (error) {
      console.error("Error adding screeningschedule:", error);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-light border rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="screen Id"
            value={screenId}
            onChange={(e) => setscreenId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="theatre Id"
            value={theatreId}
            onChange={(e) => settheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="movieId"
            value={movieId}
            onChange={(e) => setmovieId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Add Screening Schedule
        </button>
      </form>
    </div>
  );
};

export default AddScreeningScheduleForm;
