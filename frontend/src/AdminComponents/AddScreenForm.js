import React, { useState, useEffect } from "react";

const AddScreenForm = () => {
  const [theatres, setTheatres] = useState([]);
  const [selectedTheatreId, setSelectedTheatreId] = useState("");
  const [layoutId, setLayoutId] = useState("");
  const [screenId, setScreenId] = useState("");

  useEffect(() => {
    const fetchedTheatres = [
      { id: "1", name: "Theatre 1" },
      { id: "2", name: "Theatre 2" },
      { id: "3", name: "Theatre 3" },
    ];
    setTheatres(fetchedTheatres);
  }, []);

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
          <input
            type="text"
            className="form-control"
            placeholder="Screen Id"
            value={screenId}
            onChange={(e) => setScreenId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          {" "}
          <input
            type="text"
            className="form-control"
            placeholder="Layout ID"
            value={layoutId}
            onChange={(e) => setLayoutId(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <button type="submit" className="btn btn-danger">
            Add Screen
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddScreenForm;
