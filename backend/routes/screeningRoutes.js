const express = require("express");
const {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
} = require("../controllers/screeningControllers");
const router = express.Router();

router.route("/").get(fetchScreens);
router.route("/locations").get(fetchLocations);
router.route("/screenings").get(fetchScreenings);

module.exports = router;
