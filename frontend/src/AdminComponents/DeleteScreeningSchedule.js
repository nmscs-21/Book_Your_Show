import React, { useState } from "react";
import axios from "axios";

const DeleteScreeningScheduleForm = () => {
  const [screenId, setscreenId] = useState("");
  const [theatreId, settheatreId] = useState("");
  const [showDate, setdate] = useState("");
  const [movieId, setmovieId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/theatres/ScreeningSchedules`, {
        data: { screenId, theatreId, showDate, movieId },
      });
      console.log(response.data);
      setscreenId("");
      settheatreId("");
      setdate("");
      setmovieId("");
    } catch (error) {
      console.error("Error deleting ScreeningSchedule:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-light border round ed"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Screen Id"
            value={screenId}
            onChange={(e) => setscreenId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Theatre Id"
            value={theatreId}
            onChange={(e) => settheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="date"
            value={showDate}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="movie Id"
            value={movieId}
            onChange={(e) => setmovieId(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Delete ScreeningSchedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteScreeningScheduleForm;
