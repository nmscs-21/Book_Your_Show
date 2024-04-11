import React from "react";
import FixedBar from "./FixedBar";
import ScreenCards from "./ScreenCards";

const BuyTickets = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div>
        <h2 style={{ paddingLeft: "150px" }}>Movie Name</h2>
      </div>
      <FixedBar />

      <div
        style={{
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <ScreenCards
          screenName="Screen1"
          TheatreName="MGB"
          slotTime="10:00AM"
        />
        <ScreenCards
          screenName="Screen1"
          TheatreName="MGB"
          slotTime="10:00AM"
        />
        <ScreenCards
          screenName="Screen1"
          TheatreName="MGB"
          slotTime="10:00AM"
        />
        <ScreenCards
          screenName="Screen1"
          TheatreName="MGB"
          slotTime="10:00AM"
        />
      </div>
    </div>
  );
};

export default BuyTickets;
