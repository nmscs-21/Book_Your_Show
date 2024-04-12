const express = require("express");
const {
  fetchMovies,
  fetchMovieData,
} = require("../controllers/movieControllers");

const router = express.Router();

router.get("/", fetchMovies);
router.get("/:movieId", fetchMovieData);

module.exports = router;
