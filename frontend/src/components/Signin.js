import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

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
        tabIndex="-1"
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
            <LoginForm />
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
        tabIndex="-1"
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
            <SignUpForm />
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
