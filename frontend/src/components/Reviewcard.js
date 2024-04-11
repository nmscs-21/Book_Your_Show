import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Reviewcard = ({ username, review }) => {
  return (
    <div
      className="card"
      style={{
        flex: "0 0 auto",
        width: "400px",
        marginRight: "10px",
        backgroundColor: "#ffffff",
        padding: "10px",
      }}
    >
      <div className="card-body">
        <h4>{username}</h4>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Reviewcard;
