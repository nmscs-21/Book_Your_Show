import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateTimeSlotForm = () => {
  const [slotId, setslotId] = useState("");
  const [date, setdate] = useState("");
  const [screenId, setscreenId] = useState("");
  const [theatreId, setTheatreId] = useState("");
  const [slot, setslot] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`/api/theatres/TimeSlots`, {
        slotId,
        screenId,
        theatreId,
        date,
        slot,
      });
      console.log(response.data);
      setslotId("");
      setdate("");
      setscreenId("");
      setTheatreId("");
      setslot("");
    } catch (error) {
      console.error("Error updating timeslot:", error);
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
            onChange={(e) => setTheatreId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Slot"
            value={slot}
            onChange={(e) => setslot(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Update TimeSlot
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTimeSlotForm;
