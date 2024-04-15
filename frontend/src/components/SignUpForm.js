import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Toast from "./Toast";

const SignUpForm = () => {
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const [phNo, setPhNo] = useState("");
  const [dob, setDob] = useState("");

  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUpHandler = async (event) => {
    // setLoading(true); -- for button
    // Add a toast for missing details
    event.preventDefault();
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.post(
        "/api/user/register",
        { userName, pwd, phNo, dob },
        config
      );

      // Add a success toast
      console.log("registered");
      localStorage.setItem("userInfo", JSON.stringify(data));

      // setLoading(false);

      // Close the modal

      navigate("/");
    } catch (error) {
      // Add a failed toast
      console.log(error);
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
              id="signupUsername"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              style={{
                width: "300px",
                borderRadius: "10px",
              }}
            />
            <label htmlFor="signupUsername">Username</label>
          </div>
          <div className="form-floating mb-3" style={{ marginBottom: "30px" }}>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder="888888888"
              value={phNo}
              onChange={(e) => setPhNo(e.target.value)}
              required
              className="form-control"
              style={{
                width: "300px",
                borderRadius: "10px",
              }}
            />
            <label htmlFor="floatingInput">Ph no</label>
          </div>
          <div className="form-floating mb-3" style={{ marginBottom: "30px" }}>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              style={{
                width: "300px",
                borderRadius: "10px",
              }}
            />
            <label htmlFor="floatingInput">Date</label>
          </div>
          <div className="form-floating mb-3" style={{ marginBottom: "30px" }}>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              required
              style={{
                width: "300px",
                borderRadius: "10px",
              }}
            />
            <label htmlFor="signupPassword">Password</label>
          </div>
          <div>
            <button
              className="btn btn-outline-danger"
              id="signupsubmit"
              value="Log in"
              onClick={signUpHandler}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
