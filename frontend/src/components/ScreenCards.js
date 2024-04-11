import React from "react";
import Slot from "./Slot";

const ScreenCards = ({ screenName, TheatreName, slotTime }) => {
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
            <h5 className="card-title">{screenName}</h5>
            <p className="card-text">{TheatreName}</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Slot slotTime="10:00AM" />
            <Slot slotTime="10:00AM" />
            <Slot slotTime="10:00AM" />
            <Slot slotTime="10:00AM" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ScreenCards;
