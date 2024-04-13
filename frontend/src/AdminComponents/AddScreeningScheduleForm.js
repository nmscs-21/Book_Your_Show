import React, { useState, useEffect } from "react";

const AddScreeningScheduleForm = () => {
  const [theatres, setTheatres] = useState([]);
  const [selectedTheatreId, setSelectedTheatreId] = useState("");
  const [screens, setScreens] = useState([]);
  const [selectedScreenId, setSelectedScreenId] = useState("");
  const [date, setDate] = useState("");
  const [movieId, setmovieId] = useState("");

  useEffect(() => {
    const fetchedTheatres = [
      { id: "1", name: "Theatre 1" },
      { id: "2", name: "Theatre 2" },
      { id: "3", name: "Theatre 3" },
    ];
    setTheatres(fetchedTheatres);
  }, []);

  useEffect(() => {
    const fetchedScreens = [
      { id: "101", theatreId: "1", name: "Screen 1" },
      { id: "102", theatreId: "1", name: "Screen 2" },
      { id: "103", theatreId: "2", name: "Screen 3" },
    ].filter((screen) => screen.theatreId === selectedTheatreId);
    setScreens(fetchedScreens);
  }, [selectedTheatreId]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-light border rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedTheatreId}
            onChange={(e) => setSelectedTheatreId(e.target.value)}
          >
            <option value="">Select Theatre</option>
            {theatres.map((theatre) => (
              <option key={theatre.id} value={theatre.id}>
                {theatre.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={selectedScreenId}
            onChange={(e) => setSelectedScreenId(e.target.value)}
          >
            <option value="">Select Screen</option>
            {screens.map((screen) => (
              <option key={screen.id} value={screen.id}>
                {screen.id}
              </option>
            ))}
          </select>
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
            placeholder="Slot"
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
