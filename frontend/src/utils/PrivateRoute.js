import { Route } from "react-router";
import { useNavigate } from "react-router";

export const PrivateRoute = ({ login, component: Component, ...rest }) => {
  const navigate = useNavigate();
  return !login ? navigate("/login") : <Component {...rest} />;
};
