import UserBadge from "./UserBadge";
import { useUser } from "../context/UserContext";

const AuthComponent = () => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <UserBadge username={user.userName} />
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
