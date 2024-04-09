const express = require("express");
const { pool } = require("./database");

const app = express();

app.get("/", (req, res) => {
  //   const movies = pool.query("select * from Movies", (err, result, fields) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     return console.log(result);
  //   });
  //   res.send("<h1>Home Page</h1>");
  // Fetch movies from the database
  pool.query("SELECT * FROM Movie", (err, result, fields) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }

    // Render the list of movies
    const moviesList = result
      .map((movie) => `<li>${movie.movieName}</li>`)
      .join("");

    // Send the HTML response with the list of movies
    res.send(`
      <h1>List of Movies</h1>
      <ul>${moviesList}</ul>
    `);
  });
});

app.get("/movies", (req, res) => {
  // Fetch movies from the database
  pool.query("SELECT * FROM Movie", (err, result, fields) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // Map the result to an array of movie objects
    const movies = result.map((movie) => {
      return {
        movieId: movie.movieId,
        movieName: movie.movieName,
        movieDesc: movie.movieDesc,
        releaseDate: movie.releasDate,
        // Add other attributes here according to your database schema
      };
    });

    // Send the list of movies as a JavaScript object
    res.json(movies);
  });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
