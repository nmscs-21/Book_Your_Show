import React, { useState, useEffect } from "react";
import AddTheatreForm from "./AddTheatreForm";
import UpdateTheatreForm from "./UpdateTheatreForm";
import DeleteTheatreForm from "./DeleteTheatreForm";

const ShowTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  useEffect(() => {
    const fetchedTheatres = [
      { id: 1, name: "Theatre 1", location: "Location 1" },
      { id: 2, name: "Theatre 2", location: "Location 2" },
      { id: 3, name: "Theatre 3", location: "Location 3" },
    ];
    setTheatres(fetchedTheatres);
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
            <tr key={theatre.id}>
              <td>{theatre.id}</td>
              <td>{theatre.name}</td>
              <td>{theatre.location}</td>
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
