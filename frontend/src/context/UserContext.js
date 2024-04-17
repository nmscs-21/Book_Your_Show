import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [loc, setLoc] = useState();
  const [userRole, setUserRole] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //     const locInfo = localStorage.getItem("locInfo");
  //     setUser(userInfo);
  //     setLoc(locInfo);

  //     // if (!userInfo) {
  //     //   navigate("/");
  //     // }
  //   } catch (error) {
  //     console.error("Error in UserProvider useEffect:", error);
  //   }
  // }, []);

  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const locInfo = localStorage.getItem("locInfo");
      const userRole = localStorage.getItem("userRole");
      setUser(userInfo);
      setLoc(locInfo);
      setUserRole(userRole);
      // if (locInfo !== undefined && loc === null) setLoc(locInfo);
    } catch (error) {
      console.error("Error in UserProvider useEffect:", error);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("locInfo", loc);
  // }, [loc]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRole,
        setUserRole,
        selectedMovie,
        setSelectedMovie,
        selectedMovieId,
        setSelectedMovieId,
        selectedDate,
        setSelectedDate,
        loc,
        setLoc,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

export default UserProvider;
