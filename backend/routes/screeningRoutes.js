const express = require("express");
const { fetchScreens } = require("../controllers/screeningControllers");
const router = express.Router();

router.route("/").get(fetchScreens);

module.exports = router;
