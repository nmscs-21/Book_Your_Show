import React from "react";

const DeleteMovieForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <form
        className="p-3 bg-light border rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Movie Id" />
        </div>
        <button type="submit" className="btn btn-danger">
          Delete Movie
        </button>
      </form>
    </div>
  );
};

export default DeleteMovieForm;
