import React from "react";

const UpdateScreenForm = () => {
  return (
    <div className="d-flex justify-content-center">
      <form
        className="p-3 bg-light border round ed"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Screen Id" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Theatre Name"
          />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Layout Id" />
        </div>
        <div>
          <button type="submit" className="btn btn-danger">
            Update Screen
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateScreenForm;