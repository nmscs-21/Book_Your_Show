const express = require("express");
const {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  fetchTimeSlots,
  fetchScreeningSchedules,
} = require("../controllers/screeningControllers");
const router = express.Router();

router.route("/").get(fetchScreens);
router.route("/locations").get(fetchLocations);
router.route("/screenings").get(fetchScreenings);
router.route("/TimeSlots").get(fetchTimeSlots);
router.route("/ScreeningSchedules").get(fetchScreeningSchedules);

module.exports = router;
