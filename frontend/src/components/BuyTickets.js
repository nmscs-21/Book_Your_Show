import React, { useEffect, useState } from "react";
import FixedBar from "./FixedBar";
import ScreenCards from "./ScreenCards";
import axios from "axios";
import { useParams } from "react-router-dom";

const BuyTickets = () => {
  const [screens, setScreens] = useState([]);
  const [dates, setDates] = useState([]);
  const { movieId, location } = useParams();

  // const fetchSreens = async () => {
  //   const { data } = await axios.get(`/api/theatres?movieId=${movieId}`);

  //   setScreens(data);
  //   console.log(data);
  // };

  const fetchScreenings = async () => {
    const { data } = await axios.get(
      `/api/theatres/screenings?movieId=${movieId}&loc=${location}`
    );
    console.log(data);

    // Extract movieName
    const movieName = data.length > 0 ? data[0].movieName : "";

    // Create a set to store distinct dates
    const datesSet = new Set();
    data.forEach((row) => {
      datesSet.add(row.showDate);
    });

    // Convert set to array to maintain distinctness
    const distinctDates = Array.from(datesSet);

    // Parse remaining data as an array of objects
    const screenings = data.map((row) => {
      // Omit movieName and showDate
      const { movieName, showDate, ...rest } = row;
      return rest; // Return remaining data as an object
    });

    console.log("Movie Name:", movieName);
    console.log("Distinct Dates:", distinctDates);
    console.log("Screenings:", screenings);
  };

  useEffect(() => {
    fetchScreenings();
  }, []);

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div>
        <h2 style={{ paddingLeft: "150px" }}>{movieId}</h2>
      </div>
      <FixedBar dates={movieId} />

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
