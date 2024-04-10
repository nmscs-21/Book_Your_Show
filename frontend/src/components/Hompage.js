import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import MovieCard from "./Moviecard";
import "./Moviecard.css";

const Hompage = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    // const { data } = await axios.get("/movies");
    // setMovies(data);
    const { data } = await axios.get("/movies");
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h3>Movies</h3>
      <div className="container">
        {/* {movies.map((movie) => (
          <div key={movie.movieId}>
            <MovieCard
              movieName={movie.movieName}
              movieDesc={movie.movieDesc}
            />
          </div>
        ))} */}
        <MovieCard movieName="sample" movieDesc="sample" />
        <MovieCard movieName="sample" movieDesc="sample" />
        <MovieCard movieName="sample" movieDesc="sample" />
        <MovieCard movieName="sample" movieDesc="sample" />
        <MovieCard movieName="sample" movieDesc="sample" />
        <MovieCard movieName="sample" movieDesc="sample" />
      </div>
    </div>
  );
};

export default Hompage;
