import React, { useState } from "react";
import axios from "axios";

const AddScreenForm = () => {
  const [theatreId, settheatreId] = useState("");
  const [screenId, setscreenId] = useState("");
  const [layoutId, setlayoutId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/theatres/screens", {
        screenId,
        theatreId,
        layoutId,
      });
      console.log(response.data);
      setscreenId("");
      settheatreId("");
      setlayoutId("");
    } catch (error) {
      console.error("Error adding screen:", error);
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
            type="text"
            className="form-control"
            placeholder="Layout Id"
            value={layoutId}
            onChange={(e) => setlayoutId(e.target.value)}
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
