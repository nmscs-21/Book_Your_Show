import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Toast from "./Toast";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  // const [loading, setLoading] = useState(false);
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
        "/api/user/login",
        { userName, pwd },
        config
      );

      // Add a success toast
      console.log("logged in");

      // localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("userInfo", JSON.stringify(data));

      // setLoading(false);

      // Modify DOM to show user badge or something
      navigate("/");
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
      <form>
        <div
          className="modal-body"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="form-floating mb-3" style={{ marginBottom: "30px" }}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{
                width: "300px",
                borderRadius: "10px",
              }}
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating" style={{ marginBottom: "30px" }}>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              style={{
                width: "300px",
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
  );
};

export default LoginForm;
