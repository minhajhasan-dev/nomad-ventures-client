import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth() || {};
  const location = useLocation();

  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to={`/login`}>
      {" "}
    </Navigate>
  );
};

export default PrivateRoute;
