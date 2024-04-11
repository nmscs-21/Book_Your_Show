import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Moviecard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signin from "./Signin";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary d-flex justify-content-between align-items-center">
      <Signin />
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
        >
          Location
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className="btn btn-danger me-5"
        data-bs-toggle="modal"
        data-bs-target="#login"
      >
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
