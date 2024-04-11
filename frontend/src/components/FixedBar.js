import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Date from "./Date";

const FixedBar = () => {
  const [selectedDate, setSelectedDate] = useState("12");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <Navbar bg="white" variant="light" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{ paddingLeft: "150px" }}>
          <Date
            date="12"
            month="Apr"
            selected={selectedDate === "12"}
            onSelect={handleDateSelect}
          />
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
