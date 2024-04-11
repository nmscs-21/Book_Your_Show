const asyncHandler = require("express-async-handler");
const { pool } = require("../config/database");
const generateToken = require("../config/generateToken");
const bcrypt = require("bcryptjs");

const registerUser = asyncHandler(async (req, res) => {
  let { userName, dob, phNo, pwd } = req.body;
  // hash the password
  const salt = await bcrypt.genSalt(10);
  pwd = await bcrypt.hash(pwd, salt);

  if (!userName || !dob || !phNo || !pwd) {
    console.log(userName, dob, phNo, pwd);
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  // Check if the username already exists
  pool.query(
    "SELECT * FROM Users WHERE userName = ?",
    [userName],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (result.length > 0) {
        res.status(400).send("Username already taken.");
        return;
      }

      // If the username is not taken, proceed with the insertion
      // Insert into Users table
      pool.query(
        "INSERT INTO Users (userName, dob, phNo, pwd) VALUES (?,STR_TO_DATE(?, '%d-%m-%Y'),?,?)",
        [userName, dob, phNo, pwd],
        (err, result) => {
          if (err) {
            // Handle error
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
          }

          userId = result.insertId;
          // Insertion successful, send response
          res.status(200).json({
            userId,
            userName,
            dob,
            phNo,
            token: generateToken(userId),
          });
        }
      );
    }
  );
});

const authUser = asyncHandler(async (req, res) => {
  const { userName, pwd } = req.body;

  if (!userName || !pwd) {
    console.log(userName, pwd);
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  // Authorize
  pool.query(
    "SELECT * FROM Users WHERE userName = ?",
    [userName],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      if (result.length === 0) {
        res.status(400).send("Invalid Username");
        return;
      }

      bcrypt.compare(pwd, result[0].pwd, (bcryptErr, passwordMatch) => {
        if (bcryptErr) {
          console.error(bcryptErr);
          res.status(500).send("Internal Server Error");
          return;
        }

        if (passwordMatch) {
          res.status(200).json({
            userId: result[0].userId,
            userName,
            dob: result[0].dob,
            phNo: result[0].phNo,
            token: generateToken(result[0].userId),
          });
        } else {
          res.status(400).send("Invalid Password");
        }
      });
    }
  );
});

module.exports = { registerUser, authUser };
