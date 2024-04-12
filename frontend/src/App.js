import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hompage from "./components/Hompage";
import Footer from "./components/Footer";
import Moviedetails from "./components/Moviedetails";
import BuyTickets from "./components/BuyTickets";
import SeatSelection from "./components/SeatSelection";
import Admin from "./AdminComponents/Admin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hompage />} />
        <Route
          exact
          path="/movie-details/:movieId"
          element={<Moviedetails />}
        />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/buy-tickets" element={<BuyTickets />} />
        <Route exact path="/select-seat" element={<SeatSelection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
