import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hompage from "./components/Hompage";
import Signin from "./components/Signin";
import Footer from "./components/Footer";
import Moviedetails from "./components/Moviedetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hompage />} />
        <Route exact path="/movie-details" element={<Moviedetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
