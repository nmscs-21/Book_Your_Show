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
      "SELECT s.screenId,t.theatreName,s.layoutId FROM Screens s join Theatre t on s.theatreId=t.theatreId ",
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
            layoutId: row.layoutId,
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

const fetchTimeSlots = asyncHandler(async (req, res) => {
  pool.query("SELECT * FROM TimeSlots", (err, result) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // Map the result to an array of objects
    const slots = result.map((row) => {
      return {
        slotId: row.slotId,
        screenId: row.screenId,
        theatreId: row.theatreId,
        date: formatString(row.showDate),
        slot: row.slot,
      };
    });
    res.json(slots);
  });
});

const fetchScreeningSchedules = asyncHandler(async (req, res) => {
  pool.query("SELECT * FROM ScreeningSchedule", (err, result) => {
    if (err) {
      // Handle error
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    // Map the result to an array of objects
    const details = result.map((row) => {
      return {
        screenId: row.screenId,
        theatreId: row.theatreId,
        date: formatString(row.showDate),
        movieId: row.movieId,
      };
    });
    res.json(details);
  });
});

const formatString = (string) => {
  const showDate = new Date(string);
  const formattedDate = showDate.toLocaleDateString("en-GB"); // 'en-GB' for DD-MM-YYYY format
  const [day, month, year] = formattedDate.split("/");
  const dateString = `${day}-${month}-${year}`;
  return dateString;
};

module.exports = {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  fetchTimeSlots,
  fetchScreeningSchedules,
};
