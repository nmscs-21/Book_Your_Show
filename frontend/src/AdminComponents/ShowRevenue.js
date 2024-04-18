import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowMovies = () => {
  const [revenue, setrevenue] = useState([]);

  const fetchrevenue = async () => {
    const { data } = await axios.get(`/api/theatres/revenue`);
    setrevenue(data);
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const [month, day, year] = formattedDate.split("/");
    const rearrangedDate = `${year}-${month}-${day}`;
    return rearrangedDate;
  };

  useEffect(() => {
    fetchrevenue();
  }, []);

  return (
    <div>
      <h2>Revenue</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Theatre Name</th>
            <th>Screen Id</th>
            <th>Date</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {revenue.map((revenue) => (
            <tr key={revenue.theatreName}>
              <td>{revenue.theatreName}</td>
              <td>Screen {revenue.screenId}</td>
              <td>{formatDate(revenue.date)}</td>
              <td>{revenue.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMovies;
