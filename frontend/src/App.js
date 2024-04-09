import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hompage from "./components/Hompage";
import Signin from "./components/Signin";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hompage />} />
        <Route exact path="/sign-in" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
