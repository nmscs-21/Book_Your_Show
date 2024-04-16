import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          height: "50px",
          backgroundColor: "lightgray",
        }}
      >
        <div
          className="col-auto"
          style={{ textAlign: "center", lineHeight: "2.5rem" }}
        >
          <button
            type="button"
            className="btn btn-danger me-3"
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
                        style={{ marginBottom: "15px" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          id="floatinguser"
                          placeholder="Username"
                          required
                          style={{
                            width: "250px",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="floatingInput">Username</label>
                      </div>
                      <div
                        className="form-floating"
                        style={{ marginBottom: "15px" }}
                      >
                        <input
                          type="password"
                          className="form-control"
                          id="floatingpwd"
                          placeholder="Password"
                          required
                          style={{
                            width: "250px",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="floatingPassword">Password</label>
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
