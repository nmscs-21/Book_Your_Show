const express = require("express");
const {
  fetchScreens,
  fetchLocations,
} = require("../controllers/screeningControllers");
const router = express.Router();

router.route("/").get(fetchScreens);
router.route("/locations").get(fetchLocations);

module.exports = router;
