import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signin from "./Signin";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark bg-dark bg-light justify-content-center">
      <button
        type="button"
        className="btn btn-danger me-5"
        data-bs-toggle="modal"
        data-bs-target="#admin"
      >
        Admin
      </button>
      <div
        className="modal fade"
        id="admin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#dc3545", color: "#ffffff" }}
              >
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Sign in
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form>
                <div
                  className="modal-body"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="form-floating mb-3"
                    style={{ marginBottom: "30px" }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="floatinguser"
                      placeholder="Username"
                      required
                      style={{
                        width: "300px",
                        borderRadius: "10px",
                      }}
                    />
                    <label htmlFor="floatinguser">Username</label>
                  </div>
                  <div
                    className="form-floating"
                    style={{ marginBottom: "30px" }}
                  >
                    <input
                      type="password"
                      className="form-control"
                      id="floatingpwd"
                      placeholder="Password"
                      required
                      style={{
                        width: "300px",
                        borderRadius: "10px",
                      }}
                    />
                    <label htmlFor="floatingpwd">Password</label>
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-outline-danger"
                      id="adminsubmit"
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
