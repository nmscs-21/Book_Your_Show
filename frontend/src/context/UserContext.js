import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [loc, setLoc] = useState();

  const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  //   const checkLoc = JSON.parse(localStorage.getItem("checkLoc"));
  //   console.log(checkLoc);
  //   setUser(userInfo);
  //   setLoc(checkLoc);
  //   console.log(loc);
  //   if (!userInfo) {
  //     navigate("/");
  //   }
  // }, []);

  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;
      const checkLoc = JSON.parse(localStorage.getItem("checkLoc")) || null;
      console.log(checkLoc);
      setUser(userInfo);
      setLoc(checkLoc);
      console.log(loc);
      if (!userInfo) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error in UserProvider useEffect:", error);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        selectedMovie,
        setSelectedMovie,
        selectedMovieId,
        setSelectedMovieId,
        selectedDate,
        setSelectedDate,
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
