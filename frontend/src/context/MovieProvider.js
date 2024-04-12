import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  //   const [movieId, setMovieId] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(user);

    // if(!userInfo) navigate to anywhere
  }, []);
  return (
    <MovieContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </MovieContext.Provider>
  );
};

export const MovieState = () => {
  return useContext(MovieContext);
};

export default MovieProvider;
