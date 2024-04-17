import React, { useState } from "react";
import ShowTheatres from "./ShowTheatres";
import ShowScreens from "./ShowScreens";
import ShowMovies from "./ShowMovies";
import ShowTimeSlots from "./ShowTimeslots";
import ShowScreeningSchedules from "./ShowScreeningSchedules";
import ShowLayout from "./ShowLayout";

const AdminPage = () => {
  const [activeForm, setActiveForm] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: "20px" }}>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("theatre")}
        >
          Show Theatres
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("screen")}
        >
          Show Screens
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("movie")}
        >
          Show Movies
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("timeslot")}
        >
          Show Time Slots
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("screeningschedule")}
        >
          Show Screening Schedules
        </button>
        <button
          className="btn btn-outline-danger"
          style={{ margin: "10px" }}
          onClick={() => setActiveForm("layout")}
        >
          Show Layout
        </button>
      </div>

      {activeForm === "theatre" && <ShowTheatres />}
      {activeForm === "screen" && <ShowScreens />}
      {activeForm === "movie" && <ShowMovies />}
      {activeForm === "timeslot" && <ShowTimeSlots />}
      {activeForm === "screeningschedule" && <ShowScreeningSchedules />}
      {activeForm === "layout" && <ShowLayout />}
    </div>
  );
};

export default AdminPage;
