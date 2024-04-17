const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const pool = require("../config/database");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // decode tokenid
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = getUserData(decoded);
      next();
    } catch {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, token failed");
  }
});

const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users WHERE id = ?";
    pool.query(query, [id], (error, results, fields) => {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};

const getUserData = async (decoded) => {
  try {
    const user = await getUserById(decoded.id);
    // Remove the password field from the user object
    delete user.password;
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

module.exports = { protect };
