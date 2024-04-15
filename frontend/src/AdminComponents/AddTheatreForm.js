import axios from "axios";
import React, { useState } from "react";

const AddTheatreForm = () => {
  const [theatreName, setTheatreName] = useState("");
  const [theatreLoc, setTheatreLoc] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/theatres", {
        theatreName,
        theatreLoc,
      });
      console.log(response.data);
      setTheatreName("");
      setTheatreLoc("");
    } catch (error) {
      console.error("Error adding theatre:", error);
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
            placeholder="Theatre Name"
            value={theatreName}
            onChange={(e) => setTheatreName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Location"
            value={theatreLoc}
            onChange={(e) => setTheatreLoc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Add Theatre
        </button>
      </form>
    </div>
  );
};

export default AddTheatreForm;
