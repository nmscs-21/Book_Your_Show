import React, { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import axios from "axios";
import Reviewcard from "./Reviewcard";

const Userreviews = () => {
  const [reviews, setreviews] = useState();
  const { user } = useUser();
  const fetchreviews = async () => {
    const { data } = await axios.get(`/api/movies/${user.userId}/userreviews`);
    console.log(data);
    setreviews(data);
  };

  useEffect(() => {
    if (user) fetchreviews();
  }, [user]);

  return (
    <div
      className="card"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
      }}
    >
      {reviews &&
        reviews.map((review) => (
          <Reviewcard
            key={review.review}
            review={review.review}
            movieName={review.movieName}
          >
            <h1>Loading...</h1>
          </Reviewcard>
        ))}
    </div>
  );
};

export default Userreviews;
