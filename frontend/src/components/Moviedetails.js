import React, { useEffect, useRef, useState } from "react";
import Reviewcard from "./Reviewcard";
import { Link, useLocation, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import myImage from "../download.jpg";
import axios from "axios";

const Moviedetails = () => {
  const [movie, setMovie] = useState({});
  const [targetModal, setTargetModal] = useState("#login");
  const { user, setSelectedMovie, setSelectedMovieId } = useUser();

  const giveReview = () => {
    console.log("running");
    if (user) setTargetModal("#review");
    else setTargetModal("#login");
  };

  const fetchMovieData = async () => {
    const { data } = await axios.get(`/api/movies/${movieId}`);
    setMovie(data[0]);
    setSelectedMovie(data[0].movieName);
    setSelectedMovieId(data[0].movieId);
  };

  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieData();
    giveReview();
  }, []);

  return (
    <div>
      <div
        className="card mb-3"
        style={{
          maxwidth: "540px",
        }}
      >
        <div className="row g-0" style={{ backgroundColor: "#1a1a1a" }}>
          <div
            className="col-md-4"
            style={{
              paddingLeft: "140px",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <img
              src={myImage}
              className="card-img-top img-fluid"
              style={{ maxWidth: "300px", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{ color: "#ffffff", paddingTop: "50px" }}
            >
              <h1 className="card-title">{movie.movieName}</h1>
              <p className="card-text">
                {`${movie.duration} min - `}
                {` ${movie.releaseDate}`}
              </p>
              <div style={{ paddingBottom: "20px" }}>
                <button
                  type="button"
                  className="btn btn-light me-5"
                  data-bs-toggle="modal"
                  data-bs-target={targetModal}
                >
                  Give Review
                </button>
                <div
                  className="modal  fade"
                  id="review"
                  tabIndex="-1"
                  aria-labelledby="reviewlabel"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-centered"
                    style={{ color: "#000" }}
                  >
                    <div className="modal-content">
                      <div
                        className="modal-header"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <h1 className="modal-title fs-5" id="ModalLabel">
                          Review
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form>
                          <div className="mb-3">
                            <textarea
                              className="form-control"
                              id="reviewbox"
                              placeholder="write a review"
                              style={{ height: "150px" }}
                            />
                          </div>
                          <div className="modal-footer">
                            <input
                              type="submit"
                              className="btn btn-outline-danger"
                              id="adminsubmit"
                            ></input>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/buy-tickets">
                  <button type="button" className="btn btn-danger btn-lg me-5">
                    Book Tickets
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card" style={{ paddingLeft: "140px" }}>
        <h3>About the Movie</h3>
        <div className="card-body">{movie.movieDesc}</div>
      </div>
      <div
        style={{
          display: "flex",
          overflow: "auto",
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
