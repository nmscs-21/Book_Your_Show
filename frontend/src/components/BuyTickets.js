import React, { useEffect, useState } from "react";
import FixedBar from "./FixedBar";
import ScreenCards from "./ScreenCards";
import axios from "axios";
import { useParams } from "react-router-dom";

const BuyTickets = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [screens, setScreens] = useState([]);
  const [dates, setDates] = useState([]);
  const [movieName, setMovieName] = useState("");
  const { movieId, location } = useParams();

  const fetchScreenings = async () => {
    if (selectedDate) {
      const { data } = await axios.get(
        `/api/theatres/screenings?loc=${location}&movieId=${movieId}&date=${selectedDate.fullDate}`
      );
      setScreens(data);
    }
  };

  const fetchDates = async () => {
    const { data } = await axios.get(
      `/api/theatres/dates?movieId=${movieId}&loc=${location}`
    );
    // Extracting only the showDate values and storing them in a new array
    // Assuming dates is an array of objects with showDate as key

    // Array of month names
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Assuming dates is an array of objects with showDate as key
    const dateValues = data.map((dateObj) => {
      // Parse each showDate string into a Date object
      const date = new Date(dateObj.showDate);

      // Extract the date and month from the Date object
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const month = monthNames[monthIndex]; // Get month name from array
      const year = date.getFullYear();
      const fullDate = dateObj.showDate;

      // Return an object with the extracted date and month
      return { day, month, year, fullDate };
    });
    // Setting the dateValues array in the state
    setDates(dateValues);
    setSelectedDate(dateValues[0]);
  };

  useEffect(() => {
    fetchDates();
  }, []);

  useEffect(() => {
    fetchScreenings();
  }, [selectedDate]);

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div>
        <h2 style={{ paddingLeft: "150px" }}>{movieName}</h2>
      </div>
      <FixedBar
        dates={dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      <div
        style={{
          paddingLeft: "150px",
          paddingRight: "150px",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        {screens.map((screen) => (
          <ScreenCards
            key={[screen.theatreId, screen.screenId, screen.showDate]}
            screenId={screen.screenId}
            theatreName={screen.theatreName}
          />
        ))}
      </div>
    </div>
  );
};

export default BuyTickets;
