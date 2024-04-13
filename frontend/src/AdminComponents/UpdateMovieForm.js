import React from "react";

const UpdateMovieForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <form
        className="p-3 bg-light border rounded"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Movie Id" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Duration" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Description" />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Release Date"
          />
        </div>
        <button type="submit" className="btn btn-danger">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovieForm;
