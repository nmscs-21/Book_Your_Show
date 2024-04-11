import React from "react";
import Slot from "./Slot";

const ScreenCards = ({ screenName, TheatreName, slotTime }) => {
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
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
        <div class="col-md-8">
          <div class="card-body">
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
