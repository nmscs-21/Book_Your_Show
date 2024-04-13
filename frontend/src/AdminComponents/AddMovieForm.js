import React, { useState } from "react";

const AddMovieForm = () => {
  const [movieName, setMovieName] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-light border rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Release Date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
