import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Moviecard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthComponent from "./AuthComponent";
import Signin from "./SignIn";
import axios from "axios";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { userRole, loc, setLoc } = useUser();
  // const [selectedItem, setSelectedItem] = useState("Locations");
  const [locations, setLocations] = useState([]);

  // console.log(location);
  const navigate = useNavigate();

  const handleLocClick = (itemName) => {
    setLoc(itemName);
    localStorage.setItem("locInfo", itemName);
  };

  const getCities = async () => {
    const { data } = await axios.get("/api/theatres/locations");
    setLocations(data);
    if (localStorage.getItem("locInfo") === null) {
      setLoc(data[0].theatreLoc);
      localStorage.setItem("locInfo", data[0].theatreLoc);
    }
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-between align-items-center">
      <Signin />
      <Link
        className="navbar-brand p-2 ms-5"
        to={userRole !== "admin" ? `/${loc}` : "/admin"}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Book
        </span>
        <span
          style={{
            color: "white",
            backgroundColor: "#F44336",
            padding: "3px 7px",
            borderRadius: "8px",
            boxShadow: "0 3px 6px 0 rgba(0,0,0,0.16)",
            margin: "1px",
            letterSpacing: "1px",
          }}
        >
          Your
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Show
        </span>
      </Link>

      <form className="d-flex" role="search" style={{ width: "60%" }}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search for movies, events, or theatres"
          aria-label="Search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </form>
      <div className="dropdown-center">
        <button
          className="btn btn-outline-danger dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            width: "150px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            background: "none",
            borderWidth: "0",
            color: "#dc3545",
          }}
        >
          {userRole !== "admin" && loc}
        </button>
        <ul className="dropdown-menu">
          {locations.map((location) => (
            <li key={location.theatreLoc}>
              <Link
                key={location.theatreLoc}
                className="dropdown-item"
                to={`/${location.theatreLoc}`}
                onClick={() => handleLocClick(location.theatreLoc)}
              >
                {location.theatreLoc}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <AuthComponent />
    </nav>
  );
};

export default Navbar;
