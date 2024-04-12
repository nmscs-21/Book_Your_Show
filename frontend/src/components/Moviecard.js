import React from "react";
import { Link } from "react-router-dom";
import myImage from "../download.jpg";

const MovieCard = ({ movieName, movieId }) => {
  const navigateToMovie = () => {
    console.log(movieId);
  };

  return (
    <Link
      to={{ pathname: `/movie-details/${movieId}` }}
      className="card-link"
      onClick={navigateToMovie}
      style={{
        textDecoration: "none",
        width: "200px",
        borderRadius: "8px",
        overflow: "hidden",
        position: "relative",
        display: "block",
      }}
    >
      <div
        className="card"
        style={{
          position: "relative",
        }}
      >
        <img
          src={myImage}
          className="card-img-top"
          alt={movieName}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
        <div
          className="card-overlay"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
          }}
        >
          <h5
            className="card-title"
            style={{
              margin: "0",
              padding: "10px",
              background:
                "linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.5))",
              color: "#fff",
            }}
          >
            {movieName}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
