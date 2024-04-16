import React, { useEffect, useState } from "react";
import Slot from "./Slot";
import axios from "axios";

const ScreenCards = ({ screenId, theatreName }) => {
  const [slots, setSlots] = useState([]);

  const fetchSlots = async () => {
    const { data } = await axios.get(
      `/api/theatres/slots?screenId=${screenId}&theatreName=${theatreName}`
    );
    console.log(data);
    setSlots(data);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <div
            className="card-body"
            style={{
              textAlign: "center",
            }}
          >
            <h5 className="card-title">Screen {screenId}</h5>
            <p className="card-text">{theatreName}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {slots.map((slot) => (
              <Slot key={[slot.slotId]} slotTime={slot.slot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScreenCards;
