const express = require("express");
const { pool } = require("./config/database");
const app = express();
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const screeningRoutes = require("./routes/screeningRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

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

// to parse JSON request bodies
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/theatres", screeningRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
