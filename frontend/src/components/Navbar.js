import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-between align-items-center">
      <Link className="navbar-brand p-2 ms-5" to="/">
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
            backgroundColor: "#F44336", // Slightly brighter red for better contrast
            padding: "3px 7px", // Increased padding for a better visual appeal
            borderRadius: "8px", // Rounded corners
            boxShadow: "0 3px 6px 0 rgba(0,0,0,0.16)", // Enhanced shadow for depth
            margin: "1px",
            //textTransform: "uppercase", // Capitalize 'YOUR' for emphasis
            letterSpacing: "1px", // Spacing out letters for a premium look
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
      <button type="button" className="btn btn-danger me-5">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
