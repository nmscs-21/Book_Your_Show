import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MovieProvider from "./context/MovieProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MovieProvider>
);
