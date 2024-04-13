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

module.exports = { fetchScreens, fetchLocations };
