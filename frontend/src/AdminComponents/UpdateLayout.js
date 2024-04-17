import axios from "axios";
import React, { useState } from "react";

const UpdateLayout = () => {
  const [layoutId, setlayoutId] = useState("");
  const [rows, setrows] = useState("");
  const [columns, setcolumns] = useState("");
  const [divider, setdivider] = useState("");
  const [silvercost, setsilvercost] = useState("");
  const [goldcost, setgoldcost] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put("/api/theatres/layout", {
        layoutId,
        rows,
        columns,
        divider,
        silvercost,
        goldcost,
      });
      console.log(response.data);
      setlayoutId("");
      setrows("");
      setcolumns("");
      setdivider("");
      setsilvercost("");
      setgoldcost("");
    } catch (error) {
      console.error("Error updating layout:", error);
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
            placeholder="Layout Id"
            value={layoutId}
            onChange={(e) => setlayoutId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Rows"
            value={rows}
            onChange={(e) => setrows(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Columns"
            value={columns}
            onChange={(e) => setcolumns(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Divider"
            value={divider}
            onChange={(e) => setdivider(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Silvercost"
            value={silvercost}
            onChange={(e) => setsilvercost(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Goldcost"
            value={goldcost}
            onChange={(e) => setgoldcost(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Update Layout
        </button>
      </form>
    </div>
  );
};

export default UpdateLayout;
