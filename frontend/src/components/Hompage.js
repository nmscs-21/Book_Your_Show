import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MovieCard from "./Moviecard";
import "./Moviecard.css";
import { useUser } from "../context/UserContext";
import { useParams } from "react-router-dom";

const Hompage = () => {
  const [movies, setMovies] = useState([]);
  const { location } = useParams();
  const { setUser, loc, setLoc } = useUser();

  const fetchMovies = async () => {
    const { data } = await axios.get(`/api/movies/?loc=${loc}`);
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, [setUser, loc]);

  useEffect(() => {
    if (location) {
      console.log(location);
      setLoc(location);
      localStorage.setItem("locInfo", location);
    }
  }, [location]);

  return (
    <div style={{ padding: "30px" }}>
      <div className="container">
        {movies.map((movie) => (
          <MovieCard
            key={movie.movieId}
            movieName={movie.movieName}
            movieId={movie.movieId}
          />
        ))}
      </div>
    </div>
  );
};

export default Hompage;
