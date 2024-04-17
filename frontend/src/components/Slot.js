import React from "react";
import { Link } from "react-router-dom";

const Slot = ({ slotTime, screenId, theatreId, date }) => {
  const [hours, minutes, seconds] = slotTime.split(":");
  const parsedTime = new Date();
  parsedTime.setHours(hours, minutes, seconds);

  const formattedTime = parsedTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Link to={`${theatreId}/${screenId}/${date}/${slotTime}/select-seat`}>
      <button className="btn btn-outline-success disabled me-5" type="button">
        {formattedTime}
      </button>
    </Link>
  );
};

export default Slot;
