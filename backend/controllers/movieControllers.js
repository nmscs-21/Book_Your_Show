const { pool } = require("../config/database");
const asyncHandler = require("express-async-handler");

const fetchMovies = asyncHandler(async (req, res) => {
  // Fetch movies from the database
  const loc = req.query.loc;

  if (!loc) {
    pool.query("SELECT * FROM Movie", (err, result, fields) => {
      if (err) {
        console.error(err);
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      const movies = result.map((movie) => {
        return {
          movieId: movie.movieId,
          movieName: movie.movieName,
          movieDesc: movie.movieDesc,
          duration: movie.duration,
          releaseDate: formatString(movie.releaseDate),
        };
      });

      res.json(movies);
    });
  } else {
    pool.query(
      `SELECT DISTINCT movieId, movieName 
          FROM ScreeningSchedule 
          NATURAL JOIN Movie 
          NATURAL JOIN Theatre 
          WHERE theatreLoc = ? AND showDate > CURDATE()`,
      [loc],
      (err, result, fields) => {
        if (err) {
          // Handle error
          console.error(err);
          res.status(500).send("Internal Server Error");
          return;
        }
        // Map the result to an array of movie objects
        const movies = result.map((movie) => {
          return {
            movieId: movie.movieId,
            movieName: movie.movieName,
          };
        });

        // Send the list of movies as a JavaScript object
        res.json(movies);
      }
    );
  }
});

const fetchMovieData = asyncHandler(async (req, res) => {
  // Fetch movies from the database
  const movieId = req.params.movieId;

  pool.query(
    "SELECT * FROM Movie WHERE movieId = ?",
    movieId,
    (err, result, fields) => {
      if (err) {
        // Handle error
        console.error(err);
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }
      // Map the result to an array of movie objects

      const movies = result.map((movie) => {
        return {
          movieId: movie.movieId,
          movieName: movie.movieName,
          movieDesc: movie.movieDesc,
          releaseDate: formatString(result[0].releaseDate),
          duration: movie.duration,
        };
      });

      // Send the list of movies as a JavaScript object
      res.json(movies);
    }
  );
});

const addMovie = asyncHandler(async (req, res) => {
  const { movieName, duration, movieDesc, releaseDate } = req.body;

  await pool.query(
    "INSERT INTO Movie (movieName,duration,movieDesc,releaseDate) VALUES (?, ?,?,?)",
    [movieName, duration, movieDesc, releaseDate],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Movie added successfully",
        movieId: result.insertId,
      });
    }
  );
});

const updateMovie = asyncHandler(async (req, res) => {
  const { movieId, movieName, duration, movieDesc, releaseDate } = req.body;

  await pool.query(
    "UPDATE Movie SET movieName = ?, duration= ?, movieDesc = ?, releaseDate=? WHERE movieId = ?;",
    [movieName, duration, movieDesc, releaseDate, movieId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Movie Updated successfully",
        movieId: result.insertId,
      });
    }
  );
});

const deleteMovie = asyncHandler(async (req, res) => {
  const { movieId } = req.body;

  await pool.query(
    "DELETE FROM Movie WHERE movieId = ?",
    [movieId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Movie deleted successfully",
        movieId: result.insertId,
      });
    }
  );
});

const formatString = (string) => {
  const releaseDate = new Date(string);
  const formattedDate = releaseDate.toLocaleDateString("en-GB"); // 'en-GB' for DD-MM-YYYY format
  const [day, month, year] = formattedDate.split("/");
  const dateString = `${day}-${month}-${year}`;
  return dateString;
};

const fetchreviews = asyncHandler(async (req, res) => {
  const movieId = req.params.movieId;

  pool.query(
    "SELECT u.userName,r.review FROM review r join Users u on r.userId=u.userId WHERE movieId = ?",
    movieId,
    (err, result) => {
      if (err) {
        console.error(err);
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const reviews = result.map((review) => {
        return {
          userName: review.userName,
          review: review.review,
        };
      });

      res.json(reviews);
    }
  );
});

const fetchuserreviews = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  pool.query(
    "SELECT r.review,m.movieName FROM review r join Users u on r.userId=u.userId join Movie m on r.movieId=m.movieId WHERE r.userId=?",
    userId,
    (err, result) => {
      if (err) {
        console.error(err);
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const reviews = result.map((review) => {
        return {
          movieName: review.movieName,
          review: review.review,
        };
      });

      res.json(reviews);
    }
  );
});

const fetchuserbookings = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  pool.query(
    "SELECT B.bookingId, T.theatreName ,SS.screenId,SS.showDate,B.time,B.cost,M.movieName,GROUP_CONCAT(BS.seatName ORDER BY BS.seatName SEPARATOR ', ') AS seatNames FROM Theatre T " +
      "INNER JOIN ScreeningSchedule SS ON T.theatreId = SS.theatreId " +
      "INNER JOIN Movie M ON SS.movieId = M.movieId " +
      "INNER JOIN Bookings B ON SS.screenId = B.screenId AND SS.showDate = B.date AND SS.theatreId=B.theatreId " +
      "INNER JOIN BookedSeats BS ON B.bookingId = BS.bookingId " +
      "WHERE B.userId = ? " +
      "GROUP BY B.bookingId,T.theatreName,SS.screenId,SS.showDate,B.time,B.cost,M.movieName;",
    userId,
    (err, result) => {
      if (err) {
        console.error(err);
        console.log(err);
        res.status(500).send("Internal Server Error");
        return;
      }

      const bookings = result.map((booking) => {
        return {
          bookingId: booking.bookingId,
          theatreName: booking.theatreName,
          screenId: booking.screenId,
          date: booking.showDate,
          time: booking.time,
          cost: booking.cost,
          movieName: booking.movieName,
          seats: booking.seatNames,
        };
      });

      res.json(bookings);
    }
  );
});

const addreview = asyncHandler(async (req, res) => {
  const { userId, movieId, review } = req.body;

  await pool.query(
    "INSERT INTO review VALUES (?,?, ?)",
    [userId, movieId, review],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
      // Send success response
      res.status(201).json({
        message: "Review added successfully",
        reviewId: result.insertId,
      });
    }
  );
});

module.exports = {
  fetchMovies,
  fetchMovieData,
  addMovie,
  updateMovie,
  deleteMovie,
  fetchreviews,
  fetchuserreviews,
  fetchuserbookings,
  addreview,
};
