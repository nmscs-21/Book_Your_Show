import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Signin() {
  return (
    <div>
      <div
        className="modal fade"
        id="login"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-hidden="true"
        aria-labelledby="staticBackdropLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#dc3545", color: "#ffffff" }}
            >
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
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
                    id="floatingInput"
                    placeholder="Username"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div className="form-floating" style={{ marginBottom: "30px" }}>
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-outline-danger"
                    id="signinsubmit"
                    value="Log in"
                  ></input>
                </div>
              </div>
            </form>
            <div
              className="modal-footer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="btn btn-danger"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ backgroundColor: "#dc3545", color: "#ffffff" }}
            >
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                Sign up
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
                    id="floatingInput"
                    placeholder="Username"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div
                  className="form-floating mb-3"
                  style={{ marginBottom: "30px" }}
                >
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                <div
                  className="form-floating mb-3"
                  style={{ marginBottom: "30px" }}
                >
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Name"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div
                  className="form-floating mb-3"
                  style={{ marginBottom: "30px" }}
                >
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{10}"
                    placeholder="888888888"
                    required
                    className="form-control"
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingInput">Ph no</label>
                </div>
                <div
                  className="form-floating mb-3"
                  style={{ marginBottom: "30px" }}
                >
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    placeholder="date"
                    required
                    style={{
                      width: "300px",
                      borderRadius: "10px",
                    }}
                  />
                  <label for="floatingInput">Date</label>
                </div>
                <div>
                  <input
                    type="submit"
                    className="btn btn-outline-danger"
                    id="signupsubmit"
                    value="Sign up"
                  ></input>
                </div>
              </div>
            </form>
            <div
              className="modal-footer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                className="btn btn-danger"
                data-bs-target="#login"
                data-bs-toggle="modal"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
