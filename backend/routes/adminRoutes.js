const express = require("express");
const { authAdmin } = require("../controllers/adminControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/login").post(authAdmin);

module.exports = router;
