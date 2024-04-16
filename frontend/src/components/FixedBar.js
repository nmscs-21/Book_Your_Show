import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Date from "./Date";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";

const FixedBar = ({ dates, selectedDate, setSelectedDate }) => {
  return (
    <Navbar bg="white" variant="light" sticky="top" style={{ zIndex: "999" }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ paddingLeft: "150px" }}>
          {dates.map((dateItem) => (
            <Date
              key={`${dateItem.day}-${dateItem.month}`}
              date={dateItem.day}
              month={dateItem.month}
              year={dateItem.year}
              fullDate={dateItem.fullDate}
              selected={
                dateItem.day === selectedDate.day &&
                dateItem.month === selectedDate.month
              }
              onSelect={setSelectedDate}
            />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default FixedBar;
