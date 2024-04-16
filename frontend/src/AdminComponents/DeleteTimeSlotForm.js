import React, { useState } from "react";
import axios from "axios";

const DeleteTimeSlotForm = () => {
  const [slotId, setslotId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(slotId);
    try {
      const response = await axios.delete(`/api/theatres/TimeSlots`, {
        data: { slotId },
      });
      setslotId("");
    } catch (error) {
      console.error("Error deleting timeslot:", error);
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
            placeholder="Slot Id"
            value={slotId}
            onChange={(e) => setslotId(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Delete TimeSlot
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTimeSlotForm;
