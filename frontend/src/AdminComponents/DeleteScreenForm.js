import axios from "axios";
import React, { useState } from "react";

const DeleteScreenForm = () => {
  const [theatreId, settheatreId] = useState("");
  const [screenId, setscreenId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/theatres/screens`, {
        data: { screenId, theatreId },
      });
      console.log(response.data);
      setscreenId("");
      settheatreId("");
    } catch (error) {
      console.error("Error deleting screen:", error);
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
        <div>
          <button type="submit" className="btn btn-danger">
            Delete Screen
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteScreenForm;
