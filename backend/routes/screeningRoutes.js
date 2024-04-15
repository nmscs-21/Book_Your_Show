const express = require("express");
const {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  fetchDates,
} = require("../controllers/screeningControllers");
const router = express.Router();

router.route("/").get(fetchScreens);
router.route("/locations").get(fetchLocations);
router.route("/screenings").get(fetchScreenings);
router.route("/dates").get(fetchDates);

module.exports = router;
