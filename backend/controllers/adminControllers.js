const asyncHandler = require("express-async-handler");
const { pool } = require("../config/database");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");

const authAdmin = asyncHandler(async (req, res) => {
  const { userName, pwd } = req.body;

  if (!userName || !pwd) {
    console.log(userName, pwd);
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  // Authorize
  pool.query(
    "SELECT * FROM Admins WHERE adminId = ?",
    [userName],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (result.length === 0) {
        res.status(400).send("Invalid Username");
        console.log("Invalid Username");
        return;
      }

      if (pwd === result[0].pwd) {
        console.log("signed in");
        res.status(200).json({
          userName: `Admin ${result[0].adminId}`,
        });
      } else {
        res.status(400).send("Invalid Password");
        console.log("Invalid Password");
      }
    }
  );
});

module.exports = { authAdmin };
