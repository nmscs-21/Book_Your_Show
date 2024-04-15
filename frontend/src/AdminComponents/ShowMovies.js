import React, { useState, useEffect } from "react";
import AddMovieForm from "./AddMovieForm";
import UpdateMovieForm from "./UpdateMovieForm";
import DeleteMovieForm from "./DeleteMovieForm";
import axios from "axios";

const ShowMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  const fetchMovies = async () => {
    const { data } = await axios.get(`/api/movies/`);
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
            <th>Description</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.movieId}</td>
              <td>{movie.movieName}</td>
              <td>{movie.duration}</td>
              <td
                style={{
                  maxWidth: "500px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {movie.movieDesc}
              </td>
              <td>{movie.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "20px" }}>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("add")}
          >
            Add Movies
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("update")}
          >
            Update Movies
          </button>
          <button
            className="btn btn-outline-danger"
            style={{ margin: "10px" }}
            onClick={() => setActiveForm("delete")}
          >
            Delete Movies
          </button>
        </div>

        {activeForm === "add" && <AddMovieForm />}
        {activeForm === "update" && <UpdateMovieForm />}
        {activeForm === "delete" && <DeleteMovieForm />}
      </div>
    </div>
  );
};

export default ShowMovies;
