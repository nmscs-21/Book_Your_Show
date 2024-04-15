import axios from "axios";
import React, { useState } from "react";

const DeleteMovieForm = () => {
  const [movieId, setmovieId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`/api/movies`, {
        data: { movieId },
      });
      console.log(response.data);
      setmovieId("");
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
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
            placeholder="Movie Id"
            value={movieId}
            onChange={(e) => setmovieId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Movie
        </button>
      </form>
    </div>
  );
};

export default DeleteMovieForm;
