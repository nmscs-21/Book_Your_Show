import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedMovie, setSelectedMovie] = useState();
  const [selectedMovieId, setSelectedMovieId] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (!userInfo) {
      navigate("/");
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
