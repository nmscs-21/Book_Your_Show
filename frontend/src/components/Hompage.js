import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MovieCard from "./Moviecard";
import "./Moviecard.css";
// import { useParams } from "react-router-dom";

const Hompage = () => {
  const [movies, setMovies] = useState([]);

  // const { loc } = useParams();

  const fetchMovies = async () => {
    const { data } = await axios.get("/api/movies");
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
