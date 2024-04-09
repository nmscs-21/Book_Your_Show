const { createPool } = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

// Connect to the database
const pool = createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: process.env.CONNECTION_LIMIT,
});

// Perform a sample query
pool.getConnection((err, connection) => {
  if (err) {
    // Handle connection error
    console.error("Error establishing connection:", err);
    return;
  }
  console.log("Succesfully connected to MySQL database...");
  //   pool.query(
  //     `select * from Admins where adminId = ?`,
  //     [1],
  //     (err, result, fields) => {
  //       if (err) {
  //         return console.log(err);
  //       }
  //       return console.log(result);
  //     }
  //   );
});

module.exports = { pool };
