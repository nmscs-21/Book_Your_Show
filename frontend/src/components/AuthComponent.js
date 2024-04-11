import { useState, useEffect } from "react";
import UserBadge from "./UserBadge";

const AuthComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState(null);

  const isLoggedIn = () => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      try {
        const { token, userName } = JSON.parse(userInfo);
        return { loggedIn: true, name: userName };
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
    return { loggedIn: false, name: null };
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const { loggedIn, name } = isLoggedIn();
      setLoggedIn(loggedIn);
      setName(name);
    };

    // Call isLoggedIn initially
    handleStorageChange();

    // Add event listener for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div>
      {loggedIn ? (
        <UserBadge username={name} />
      ) : (
        <button
          type="button"
          className="btn btn-danger me-5"
          data-bs-toggle="modal"
          data-bs-target="#login"
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default AuthComponent;
