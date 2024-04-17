import React, { useState } from "react";
import axios from "axios";

const UpdateScreenForm = () => {
  const [theatreId, settheatreId] = useState("");
  const [screenId, setscreenId] = useState("");
  const [newscreenId, setnewscreenId] = useState("");
  const [layoutId, setlayoutId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("/api/theatres/screens", {
        screenId,
        newscreenId,
        theatreId,
        layoutId,
      });
      console.log(response.data);
      setscreenId("");
      setnewscreenId("");
      settheatreId("");
      setlayoutId("");
    } catch (error) {
      console.error("Error updating screen:", error);
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
            placeholder="New Screen Id"
            value={newscreenId}
            onChange={(e) => setnewscreenId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Theatre id"
            value={theatreId}
            onChange={(e) => settheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Layout id"
            value={layoutId}
            onChange={(e) => setlayoutId(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Update Screen
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateScreenForm;
