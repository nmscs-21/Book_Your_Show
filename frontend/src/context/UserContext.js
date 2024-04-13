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

  useEffect(() => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const locInfo = JSON.parse(localStorage.getItem("locInfo"));
      setUser(userInfo);
      setLoc(locInfo);

      // if (!userInfo) {
      //   navigate("/");
      // }
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
