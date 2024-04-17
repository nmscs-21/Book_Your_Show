import React from "react";
import Userbadge from "../icons/UserBadge.jpg";
import "./userbadge.css";
import { useUser } from "../context/UserContext";

const UserBadge = ({ username }) => {
  const { userRole } = useUser();
  function logoutHandler() {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  }

  return (
    <div className="dropdown show" style={{ paddingRight: "30px" }}>
      <button
        className="btn dropdown-toggle"
        style={{ border: "transparent" }}
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="circle-container">
          <div
            className="user-badge"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={Userbadge}
              alt={username}
              className="avatar"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </button>

      <div
        className="dropdown-menu dropdown-menu-end"
        styles={{ zindex: "1000" }}
      >
        <li>
          <p style={{ textAlign: "center" }}>{username}</p>
        </li>
        {userRole === "user" && (
          <>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/Booking-table">
                Booking History
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/User-reviews">
                Reviews
              </a>
            </li>
          </>
        )}

        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="/" onClick={logoutHandler}>
            Log Out
          </a>
        </li>
      </div>
    </div>
  );
};

export default UserBadge;
