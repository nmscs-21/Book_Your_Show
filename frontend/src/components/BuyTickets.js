import React, { useEffect, useState } from "react";
import FixedBar from "./FixedBar";
import ScreenCards from "./ScreenCards";
import { useUser } from "../context/UserContext";
import axios from "axios";

const BuyTickets = () => {
  const { selectedMovie, selectedMovieId, selectedDate } = useUser();
  const [screens, setScreens] = useState([]);

  const fetchSreens = async () => {
    console.log(selectedMovieId);
    const { data } = await axios.get(
      `/api/theatres?movieId=${selectedMovieId}`
    );

    setScreens(data);
    console.log(data);
  };

  // fetchSreens();
  useEffect(() => {
    fetchSreens();
  }, [selectedMovieId]);

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div>
        <h2 style={{ paddingLeft: "150px" }}>{selectedMovie}</h2>
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
        <ScreenCards screenName="Screen1" theatreName="MGB" />
        <ScreenCards screenName="Screen1" theatreName="MGB" />
        {screens.map((screen) => (
          <ScreenCards
            key={[screen.theatreId, screen.screenId, screen.showDate]}
            screenName={`Screen ${screen.screenId}`}
            theatreName={screen.theatreName}
          />
        ))}
      </div>
    </div>
  );
};

export default BuyTickets;
