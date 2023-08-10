import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);
  return !user ? <Navigate to="/login" /> : <Component />;
};
