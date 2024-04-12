// ShowMovies.jsx

import React, { useState, useEffect } from "react";
import AddMovieForm from "./AddMovieForm";
import UpdateMovieForm from "./UpdateMovieForm";
import DeleteMovieForm from "./DeleteMovieForm";

const ShowMovies = () => {
  const [movies, setMovies] = useState([]);
  const [activeForm, setActiveForm] = useState("");

  useEffect(() => {
    // Fetch movies from the database
    // Example: fetch('/api/movies').then(response => response.json()).then(data => setMovies(data));
    // Replace the above line with your actual API call to fetch movie data
    // For demonstration purpose, I'm setting movies manually
    const fetchedMovies = [
      {
        id: 1,
        name: "Movie 1",
        duration: "2h",
        description: "Description 1",
        releaseDate: "2022-01-01",
      },
      {
        id: 2,
        name: "Movie 2",
        duration: "2h30m",
        description: "Description 2",
        releaseDate: "2022-01-15",
      },
      {
        id: 3,
        name: "Movie 3",
        duration: "1h45m",
        description: "Description 3",
        releaseDate: "2022-02-01",
      },
    ];
    setMovies(fetchedMovies);
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
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td>{movie.name}</td>
              <td>{movie.duration}</td>
              <td>{movie.description}</td>
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
