import React, { useState } from "react";
import axios from "axios";

const UpdateTheatreForm = () => {
  const [theatreId, setTheatreId] = useState("");
  const [theatreName, setTheatreName] = useState("");
  const [theatreLoc, setTheatreLoc] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/api/theatres`, {
        theatreId,
        theatreName,
        theatreLoc,
      });
      console.log(response.data);
      setTheatreId("");
      setTheatreName("");
      setTheatreLoc("");
    } catch (error) {
      console.error("Error updating theatre:", error);
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
            placeholder="Theatre Id"
            value={theatreId}
            onChange={(e) => setTheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Theatre Name"
            value={theatreName}
            onChange={(e) => setTheatreName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Theatre Loc"
            value={theatreLoc}
            onChange={(e) => setTheatreLoc(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Update Theatre
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTheatreForm;
