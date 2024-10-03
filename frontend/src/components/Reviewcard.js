import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Reviewcard = ({ username, movieName, review }) => {
  return (
    <div
      className="card"
      style={{
        flex: "0 0 auto",
        width: "400px",
        marginRight: "20px",
        backgroundColor: "#ffffff",
        padding: "10px",
      }}
    >
      <div className="card-body">
        <h3>{username}</h3>
        <h4>{movieName}</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{review}</p>
      </div>
    </div>
  );
};

export default Reviewcard;
