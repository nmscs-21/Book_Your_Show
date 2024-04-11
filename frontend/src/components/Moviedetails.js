// MovieDetails.js
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Reviewcard from "./Reviewcard";
import { Link } from "react-router-dom";

const Moviedetails = () => {
  return (
    <div>
      <div
        class="card mb-3"
        style={{
          maxwidth: "540px",
        }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <h3>image</h3>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">Movie Name</h3>
              <p class="card-text">duration and release date</p>
              <div style={{ paddingBottom: "20px" }}>
                <Link to="/buy-tickets">
                  <button type="button" className="btn btn-danger me-5">
                    Book Tickets
                  </button>
                </Link>
              </div>
              <div>
                <Link to="/review">
                  <button type="button" className="btn btn-outline-danger me-5">
                    Give Review
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h3>About the Movie</h3>
        <div class="card-body">Movie Description</div>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "hidden",
          width: "100%",
          whiteSpace: "nowrap",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <Reviewcard username="user1" review="review1" />
        <Reviewcard username="user2" review="review2" />
        <Reviewcard username="user3" review="review3" />
      </div>
    </div>
  );
};

export default Moviedetails;
