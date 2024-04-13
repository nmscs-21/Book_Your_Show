// ShowScreens.jsx

import React, { useState, useEffect } from "react";
import AddScreenForm from "./AddScreenForm";
import UpdateScreenForm from "./UpdateScreenForm";
import DeleteScreenForm from "./DeleteScreenForm";

const ShowScreens = () => {
  const [screens, setScreens] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  useEffect(() => {
    // Fetch screens from the database
    // Example: fetch('/api/screens').then(response => response.json()).then(data => setScreens(data));
    // Replace the above line with your actual API call to fetch screen data
    // For demonstration purpose, I'm setting screens manually
    const fetchedScreens = [
      { id: 1, theatreId: 1, name: "Screen 1" },
      { id: 2, theatreId: 1, name: "Screen 2" },
      { id: 3, theatreId: 2, name: "Screen 3" },
    ];
    setScreens(fetchedScreens);
  }, []);

  return (
    <div>
      <h2>Screens</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Theatre ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {screens.map((screen) => (
            <tr key={screen.id}>
              <td>{screen.id}</td>
              <td>{screen.theatreId}</td>
              <td>{screen.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "20px" }}>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("add")}
          >
            Add Screens
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update Screens
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete Screens
          </button>
        </div>

        {activeForm === "add" && <AddScreenForm />}
        {activeForm === "update" && <UpdateScreenForm />}
        {activeForm === "delete" && <DeleteScreenForm />}
      </div>
    </div>
  );
};

export default ShowScreens;
