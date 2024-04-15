const express = require("express");
const {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  addTheatre,
  addScreen,
  updateTheatre,
  deleteTheatre,
  updateScreen,
  deleteScreen,
} = require("../controllers/screeningControllers");
const router = express.Router();

router
  .route("/")
  .get(fetchScreens)
  .post(addTheatre)
  .put(updateTheatre)
  .delete(deleteTheatre);
router.route("/locations").get(fetchLocations);
router.route("/screenings").get(fetchScreenings);
router.route("/screens").post(addScreen).put(updateScreen).delete(deleteScreen);

module.exports = router;
