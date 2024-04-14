import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Date from "./Date";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const FixedBar = () => {
  const { selectedDate, setSelectedDate } = useUser();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <Navbar bg="white" variant="light" sticky="top" style={{ zIndex: "999" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ paddingLeft: "150px" }}>
          <Link to={selectedDate}>
            <Date
              date="12"
              month="Apr"
              selected={selectedDate === "12"}
              onSelect={handleDateSelect}
            />
          </Link>
          <Date
            date="13"
            month="Apr"
            selected={selectedDate === "13"}
            onSelect={handleDateSelect}
          />
          <Date
            date="14"
            month="Apr"
            selected={selectedDate === "14"}
            onSelect={handleDateSelect}
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FixedBar;
