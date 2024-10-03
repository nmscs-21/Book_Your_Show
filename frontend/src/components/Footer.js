import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const navigate = useNavigate();

  const loginHandler = async (event) => {
    // setLoading(true); -- for button
    // Add a toast for missing details
    event.preventDefault();
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/admin/login",
        { userName, pwd },
        config
      );

      // Add a success toast
      console.log("logged in");

      // localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userRole", "admin");
      // setLoading(false);

      // Modify DOM to show user badge or something
      navigate("/admin");
      // Close the modal

      const closeButton = document.querySelector(".btn-close");
      if (closeButton) {
        closeButton.click();
      }

      setPwd("");
      setUserName("");

      // Reload the page
      window.location.reload();
    } catch (error) {
      // Add a failed toast
      console.log(error);
      navigate("/");
      // Close the modal

      const closeButton = document.querySelector(".btn-close");
      if (closeButton) {
        closeButton.click();
      }
      setPwd("");
      setUserName("");

      // setLoading(false);
    }
  };

  return (
    <div>
      <footer
        style={{
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
                          placeholder="Admin Id"
                          onChange={(e) => setUserName(e.target.value)}
                          required
                          style={{
                            width: "250px",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="floatingInput">Admin Id</label>
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
                          onChange={(e) => setPwd(e.target.value)}
                          style={{
                            width: "250px",
                            borderRadius: "10px",
                          }}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>
                      <div>
                        <button
                          className="btn btn-outline-danger"
                          id="signinsubmit"
                          value="Log in"
                          onClick={loginHandler}
                        >
                          Log in
                        </button>
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
