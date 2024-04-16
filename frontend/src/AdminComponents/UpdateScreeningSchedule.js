import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateScreeningScheduleForm = () => {
  const [olddate, setolddate] = useState("");
  const [newdate, setnewdate] = useState("");
  const [screenId, setscreenId] = useState("");
  const [theatreId, setTheatreId] = useState("");
  const [movieId, setmovieId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/api/theatres/ScreeningSchedules`, {
        screenId,
        theatreId,
        olddate,
        newdate,
        movieId,
      });
      console.log(response.data);
      setolddate("");
      setnewdate("");
      setscreenId("");
      setTheatreId("");
      setmovieId("");
    } catch (error) {
      console.error("Error updating timeslot:", error);
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
            onChange={(e) => setTheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <p>Old date</p>
          <input
            type="date"
            className="form-control"
            placeholder="old date"
            value={olddate}
            onChange={(e) => setolddate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <p>New date</p>
          <input
            type="date"
            className="form-control"
            placeholder="new date"
            value={newdate}
            onChange={(e) => setnewdate(e.target.value)}
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
            Update ScreeningSchedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateScreeningScheduleForm;
