import React, { useState } from "react";
import axios from "axios";

const DeleteTheatreForm = () => {
  const [layoutId, setlayoutId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/theatres/layout`, {
        data: { layoutId },
      });
      console.log(response.data);
      setlayoutId("");
    } catch (error) {
      console.error("Error deleting layout:", error);
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
            placeholder="Layout Id"
            value={layoutId}
            onChange={(e) => setlayoutId(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Delete Layout
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTheatreForm;
