import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MovieCard from "./Moviecard";
import "./Moviecard.css";

const Hompage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get("/movies");
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
          <div key={movie.movieId}>
            <MovieCard
              movieName={movie.movieName}
              movieDesc={movie.movieDesc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hompage;
