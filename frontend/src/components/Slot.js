import React from "react";
import { Link } from "react-router-dom";

const Slot = ({ slotTime }) => {
  return (
    <Link to="/select-seat">
      <button className="btn btn-outline-success disabled me-5" type="button">
        {slotTime}
      </button>
    </Link>
  );
};

export default Slot;
