import React, { useState } from "react";
import axios from "axios";

const DeleteTheatreForm = () => {
  const [theatreId, settheatreId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/theatres`, {
        data: { theatreId },
      });
      console.log(response.data);
      settheatreId("");
    } catch (error) {
      console.error("Error deleting theatre:", error);
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
            placeholder="Theatre Id"
            value={theatreId}
            onChange={(e) => settheatreId(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Delete Theatre
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTheatreForm;
