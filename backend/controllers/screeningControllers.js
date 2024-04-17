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
      "SELECT s.screenId,t.theatreName,t.theatreId,s.layoutId FROM Screens s join Theatre t on s.theatreId=t.theatreId ",
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

const fetchDates = asyncHandler(async (req, res) => {
  const { movieId, loc } = req.query;
  pool.query(
    "SELECT DISTINCT showDate " +
      "FROM ScreeningSchedule " +
      "JOIN Theatre ON ScreeningSchedule.theatreId = Theatre.theatreId " +
      "JOIN Movie ON ScreeningSchedule.movieId = Movie.movieId " +
      "WHERE Movie.movieId = ? AND Theatre.theatreLoc = ? " +
      "ORDER BY showDate",
    [movieId, loc],
    (err, result, fields) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const datesList = result.map((row) => {
        return {
          showDate: row.showDate,
        };
      });

      // Send the list of dates as a JavaScript object
      res.json(datesList);
    }
  );
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
  const date = req.query.date;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const [month, day, year] = formattedDate.split("/");
  const rearrangedDate = `${year}-${month}-${day}`;

  if (movieId && loc && date) {
    pool.query(
      "SELECT DISTINCT ss.screenId, t.theatreName, t.theatreId " +
        "FROM ScreeningSchedule ss " +
        "INNER JOIN Theatre t ON ss.theatreId = t.theatreId " +
        "WHERE t.theatreLoc = ? AND ss.showDate = ? AND ss.movieId = ?",
      [loc, rearrangedDate, movieId],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        const screenings = result.map((row) => {
          return {
            screenId: row.screenId,
            theatreName: row.theatreName,
            theatreId: row.theatreId,
          };
        });
        res.json(screenings);
      }
    );
  } else if (!movieId && !loc) {
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
  } else if (movieId && loc) {
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

const fetchSlots = asyncHandler(async (req, res) => {
  const screenId = req.query.screenId;
  const theatreName = req.query.theatreName;
  pool.query(
    "SELECT t.slot FROM TimeSlots t join Theatre th on t.theatreId = th.theatreId where t.screenId=? and th.theatreName=?",
    [screenId, theatreName],
    (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const details = result.map((row) => {
        return {
          slot: row.slot,
        };
      });

      // Send the list of details as a JavaScript object
      res.json(details);
    }
  );
});

const fetchlayout = asyncHandler(async (req, res) => {
  const theatreId = req.query.theatreId;
  const screenId = req.query.screenId;
  pool.query(
    "SELECT l.rows,l.columns,l.divider,l.silvercost,l.goldcost FROM Layout l join Screens s on s.layoutId=l.layoutId where s.theatreId=? and s.screenId=?",
    [theatreId, screenId],
    (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const details = result.map((row) => {
        return {
          rows: row.rows,
          columns: row.columns,
          divider: row.divider,
          silvercost: row.silvercost,
          goldcost: row.goldcost,
        };
      });

      // Send the list of details as a JavaScript object
      res.json(details);
    }
  );
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
  const { screenId, theatreId, layoutId } = req.body;

  await pool.query(
    "INSERT INTO Screens VALUES (?, ?, ?)",
    [screenId, theatreId, layoutId],
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
  const { screenId, newscreenId, theatreId, layoutId } = req.body;

  await pool.query(
    "UPDATE Screens SET screenId = ?,layoutId= ? WHERE theatreId = ? and screenId =?;",
    [newscreenId, layoutId, theatreId, screenId],
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

const addbooking = asyncHandler(async (req, res) => {
  const {
    userId,
    theatreId,
    screenId,
    rearrangedDate,
    slot,
    totalCost,
    selectedSeats,
  } = req.body;
  console.log(
    userId,
    theatreId,
    screenId,
    rearrangedDate,
    slot,
    totalCost,
    selectedSeats
  );

  // Insert into Bookings table
  pool.query(
    "INSERT INTO Bookings (userId, theatreId, screenId, date, time, cost) VALUES (?, ?, ?, ?, ?, ?)",
    [userId, theatreId, screenId, rearrangedDate, slot, totalCost],
    (err, result) => {
      if (err) {
        console.error("Error inserting into Bookings:", err);
        return res.status(500).send("Error inserting into Bookings");
      }

      const bookingId = result.insertId;

      // Insert seats into BookedSeats table
      const seatInserts = selectedSeats.map((seat) => [bookingId, seat]);

      pool.query(
        "INSERT INTO BookedSeats (bookingId, seatName) VALUES ?",
        [seatInserts],
        (err) => {
          if (err) {
            console.error("Error inserting into BookedSeats:", err);
            return res.status(500).send("Error inserting into BookedSeats");
          }
          res.status(200).send("Booking successful");
        }
      );
    }
  );
});

const fetchbooking = asyncHandler(async (req, res) => {
  const theatreId = req.query.theatreId;
  const screenId = req.query.screenId;
  const date = req.query.date;
  const slot = req.query.slot;
  pool.query(
    "SELECT b.seatName FROM BookedSeats b join Bookings bb on b.bookingId=bb.bookingId WHERE bb.theatreId=? and bb.screenId=? and bb.date=? and bb.time=?",
    [theatreId, screenId, date, slot],
    (err, result) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of objects
      const details = result.map((row) => {
        return {
          seats: row.seatName,
        };
      });

      // Send the list of details as a JavaScript object
      res.json(details);
    }
  );
});

module.exports = {
  fetchScreens,
  fetchLocations,
  fetchScreenings,
  fetchDates,
  addTheatre,
  updateTheatre,
  deleteTheatre,
  addScreen,
  updateScreen,
  deleteScreen,
  fetchSlots,
  fetchlayout,
  addbooking,
  fetchbooking,
};
