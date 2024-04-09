import React from "react";
import "./Moviecard.css";

const MovieCard = ({ movieName, movieDesc }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{movieName}</h5>
        <p className="card-text">{movieDesc}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

// const MovieCard = ({ movieName, movieDesc }) => {
//   return (
//     <div
//       className="card"
//       style={{ width: "18rem", display: "flex", flexDirection: "column" }}
//     >
//       <div className="card-body" style={{ flex: "1", overflow: "hidden" }}>
//         <h5 className="card-title">{movieName}</h5>
//         <p className="card-text">{movieDesc}</p>
//       </div>
//       <div style={{ alignSelf: "flex-end" }}>
//         {/* <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a> */}
//       </div>
//     </div>
//   );
// };

export default MovieCard;
