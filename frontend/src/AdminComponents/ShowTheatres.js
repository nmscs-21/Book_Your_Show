import React, { useState, useEffect } from "react";
import AddTheatreForm from "./AddTheatreForm";
import UpdateTheatreForm from "./UpdateTheatreForm";
import DeleteTheatreForm from "./DeleteTheatreForm";
import axios from "axios";

const ShowTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  const fetchTheatres = async () => {
    const { data } = await axios.get(`/api/theatres/screenings`);
    setTheatres(data);
  };

  useEffect(() => {
    fetchTheatres();
  }, []);

  return (
    <div>
      <h2>Theatres</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {theatres.map((theatre) => (
            <tr key={theatre.theatreId}>
              <td>{theatre.theatreId}</td>
              <td>{theatre.theatreName}</td>
              <td>{theatre.theatreLoc}</td>
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
            Add Theatres
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update Theatres
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete Theatres
          </button>
        </div>

        {activeForm === "add" && <AddTheatreForm />}
        {activeForm === "update" && <UpdateTheatreForm />}
        {activeForm === "delete" && <DeleteTheatreForm />}
      </div>
    </div>
  );
};

export default ShowTheatres;
