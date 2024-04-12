import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Moviecard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AuthComponent from "./AuthComponent";
import Signin from "./SignIn";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState("Action");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };
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
          {selectedItem}
        </button>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick("Action")}
            >
              Action
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick("Another action")}
            >
              Another action
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleItemClick("Something else here")}
            >
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <AuthComponent />
    </nav>
  );
};

export default Navbar;
