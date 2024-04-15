const express = require("express");
const {
  fetchMovies,
  fetchMovieData,
  addMovie,
  updateMovie,
  deleteMovie,
  fetchreviews,
} = require("../controllers/movieControllers");

const router = express.Router();

router
  .route("/")
  .get(fetchMovies)
  .post(addMovie)
  .put(updateMovie)
  .delete(deleteMovie);
router.route("/:movieId").get(fetchMovieData);
router.route("/:movieId/reviews").get(fetchreviews);
module.exports = router;
