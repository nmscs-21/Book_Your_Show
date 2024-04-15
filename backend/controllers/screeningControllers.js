const { pool } = require("../config/database");
const asyncHandler = require("express-async-handler");

const fetchScreens = asyncHandler(async (req, res) => {
  // Fetch movies from the database
  //   const location = req.query.location;
  const movieId = req.query.movieId;
  const date = req.query.date;

  //   if (!location && !movieId && !date) {
  //     pool.query(
  //       "SELECT T.theatreId, T.theatreName, T.theatreLoc, S.screenId " +
  //         "FROM Theatre T " +
  //         "INNER JOIN ScreeningSchedule S ON T.theatreId = S.theatreId",
  //       (err, result, fields) => {
  //         if (err) {
  //           // Handle error
  //           console.error(err);
  //           res.status(500).send("Internal Server Error");
  //           return;
  //         }
  //         // Map the result to an array of objects
  //         // console.log(result);
  //         const details = result.map((row) => {
  //           return {
  //             theatreId: row.theatreId,
  //             theatreName: row.theatreName,
  //             theatreLoc: row.theatreLoc,
  //             screenId: row.screenId,
  //           };
  //         });

  //         // Send the list of details as a JavaScript object
  //         res.json(details);
  //       }
  //     );
  //   }
  if (!movieId && !date) {
    pool.query(
      "SELECT s.screenId,t.theatreName,t.theatreId FROM Screens s join Theatre t on s.theatreId=t.theatreId ",
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }

        const screens = result.map((row) => {
          return {
            screenId: row.screenId,
            theatreName: row.theatreName,
            theatreId: row.theatreId,
          };
        });

        res.json(screens);
      }
    );
  }

  if (movieId && date) {
    pool.query(
      "SELECT T.theatreId, T.theatreName, SS.screenId, SS.showDate " +
        "FROM Theatre T " +
        "INNER JOIN ScreeningSchedule SS ON T.theatreId = SS.theatreId " +
        "INNER JOIN TimeSlots TS ON SS.screenId = TS.screenId AND SS.theatreId = TS.theatreId " +
        "WHERE SS.movieId = ? AND TS.showDate = ?",
      [movieId, date], // Pass the selected date as a parameter
      (err, result, fields) => {
        if (err) {
          // Handle error
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        // Map the result to an array of objects
        const details = result.map((row) => {
          return {
            theatreId: row.theatreId,
            theatreName: row.theatreName,
            screenId: row.screenId,
            showDate: row.showDate,
          };
        });

        // Send the list of details as a JavaScript object
        res.json(details);
      }
    );
  }

  //   if (location) {
  //     if (!movieId) {
  //       pool.query(
  //         "SELECT T.theatreId, T.theatreName, S.screenId " +
  //           "FROM Theatre T " +
  //           "INNER JOIN ScreeningSchedule S ON T.theatreId = S.theatreId " +
  //           "WHERE T.theatreLoc = ?",
  //         [location],
  //         (err, result, fields) => {
  //           if (err) {
  //             // Handle error
  //             console.error(err);
  //             res.status(500).send("Internal Server Error");
  //             return;
  //           }
  //           // Map the result to an array of objects
  //           //   console.log(result);
  //           const details = result.map((row) => {
  //             return {
  //               theatreId: row.theatreId,
  //               theatreName: row.theatreName,
  //               screenId: row.screenId,
  //             };
  //           });

  //           // Send the list of details as a JavaScript object
  //           res.json(details);
  //         }
  //       );
  //     }
  //     pool.query(
  //       "SELECT T.theatreId, T.theatreName, SS.screenId, SS.showDate " +
  //         "FROM Theatre T " +
  //         "INNER JOIN ScreeningSchedule SS ON T.theatreId = SS.theatreId " +
  //         "WHERE T.theatreLoc = ? AND SS.movieId = ?",
  //       [location, movieId],
  //       (err, result, fields) => {
  //         if (err) {
  //           // Handle error
  //           console.error(err);
  //           res.status(500).send("Internal Server Error");
  //           return;
  //         }
  //         // Map the result to an array of objects
  //         // console.log(result);
  //         const details = result.map((row) => {
  //           return {
  //             theatreId: row.theatreId,
  //             theatreName: row.theatreName,
  //             theatreLoc: location,
  //             screenId: row.screenId,
  //             showDate: row.showDate,
  //           };
  //         });

  //         // Send the list of details as a JavaScript object
  //         res.json(details);
  //       }
  //     );
  //   }

  if (movieId) {
    pool.query(
      "SELECT T.theatreId, T.theatreName, SS.screenId, SS.showDate " +
        "FROM Theatre T " +
        "INNER JOIN ScreeningSchedule SS ON T.theatreId = SS.theatreId " +
        "WHERE SS.movieId = ?",
      [movieId],
      (err, result, fields) => {
        if (err) {
          // Handle error
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        // Map the result to an array of objects
        // console.log(result);
        const details = result.map((row) => {
          return {
            theatreId: row.theatreId,
            theatreName: row.theatreName,
            theatreLoc: row.location,
            screenId: row.screenId,
            showDate: row.showDate,
          };
        });

        // Send the list of details as a JavaScript object
        res.json(details);
      }
    );
  }
});

const fetchLocations = asyncHandler(async (req, res) => {
  pool.query(
    "SELECT DISTINCT theatreLoc FROM Theatre",
    (err, result, fields) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const details = result.map((row) => {
        return {
          theatreLoc: row.theatreLoc,
        };
      });

      // Send the list of details as a JavaScript object
      res.json(details);
    }
  );
});

const fetchScreenings = asyncHandler(async (req, res) => {
  const movieId = req.query.movieId;
  const loc = req.query.loc;

  if (!movieId && !loc) {
    pool.query("SELECT * FROM Theatre", (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const theatres = result.map((row) => {
        return {
          theatreId: row.theatreId,
          theatreName: row.theatreName,
          theatreLoc: row.theatreLoc,
        };
      });

      // Send the list of details as a JavaScript object
      res.json(theatres);
    });
  }

  if (movieId && loc) {
    pool.query(
      "SELECT T.theatreId, T.theatreName, SS.screenId, SS.showDate, M.movieName " +
        "FROM Theatre T " +
        "INNER JOIN ScreeningSchedule SS ON T.theatreId = SS.theatreId " +
        "INNER JOIN Movie M ON SS.movieId = M.movieId " +
        "WHERE SS.movieId = ? AND T.theatreLoc = ?",
      [movieId, loc], // Pass the movie ID and theatre location
      (err, result, fields) => {
        if (err) {
          // Handle error
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        // Map the result to an array of objects
        const details = result.map((row) => {
          return {
            theatreId: row.theatreId,
            theatreName: row.theatreName,
            screenId: row.screenId,
            showDate: row.showDate,
            movieName: row.movieName, // Include movieName in the result
          };
        });

        // Send the list of details as a JavaScript object
        res.json(details);
      }
    );
  }
});

const addTheatre = asyncHandler(async (req, res) => {
  const { theatreName, theatreLoc } = req.body;

  await pool.query(
    "INSERT INTO Theatre (theatreName, theatreLoc) VALUES (?, ?)",
    [theatreName, theatreLoc],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Theatre added successfully",
        theatreId: result.insertId,
      });
    }
  );
});

const updateTheatre = asyncHandler(async (req, res) => {
  const { theatreId, theatreName, theatreLoc } = req.body;

  await pool.query(
    "UPDATE Theatre SET theatreName = ?,theatreLoc = ? WHERE theatreId = ?;",
    [theatreName, theatreLoc, theatreId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Theatre Updated successfully",
        theatreId: result.insertId,
      });
    }
  );
});

const deleteTheatre = asyncHandler(async (req, res) => {
  const { theatreId } = req.body;

  await pool.query(
    "DELETE FROM Theatre WHERE theatreId = ?",
    [theatreId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Theatre deleted successfully",
        theatreId: result.insertId,
      });
    }
  );
});

const addScreen = asyncHandler(async (req, res) => {
  const { screenId, theatreId } = req.body;

  await pool.query(
    "INSERT INTO Screens VALUES (?, ?)",
    [screenId, theatreId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Screen added successfully",
        screenId: result.insertId,
      });
    }
  );
});

const updateScreen = asyncHandler(async (req, res) => {
  const { screenId, newscreenId, theatreId } = req.body;

  await pool.query(
    "UPDATE Screens SET screenId = ? WHERE theatreId = ? and screenId =?;",
    [newscreenId, theatreId, screenId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Screen Updated successfully",
        screenId: result.insertId,
      });
    }
  );
});

const deleteScreen = asyncHandler(async (req, res) => {
  const { screenId, theatreId } = req.body;

  await pool.query(
    "DELETE FROM Screens WHERE screenId=? and theatreId = ?",
    [screenId, theatreId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Screen deleted successfully",
        screenId: result.insertId,
      });
    }
  );
});

module.exports = {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  addTheatre,
  updateTheatre,
  deleteTheatre,
  addScreen,
  updateScreen,
  deleteScreen,
};
