import React, { useState, useEffect } from "react";
import AddScreenForm from "./AddScreenForm";
import UpdateScreenForm from "./UpdateScreenForm";
import DeleteScreenForm from "./DeleteScreenForm";
import axios from "axios";

const ShowScreens = () => {
  const [screens, setScreens] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  const fetchScreens = async () => {
    const { data } = await axios.get(`/api/theatres/`);
    console.log(data);
    setScreens(data);
  };

  useEffect(() => {
    fetchScreens();
  }, []);

  return (
    <div>
      <h2>Screens</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ScreenId</th>
            <th>Theatre Name</th>
            <th>Theatre Id</th>
          </tr>
        </thead>
        <tbody>
          {screens.map((screen) => (
            <tr key={screen.screenId}>
              <td>{screen.screenId}</td>
              <td>{screen.theatreName}</td>
              <td>{screen.theatreId}</td>
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
