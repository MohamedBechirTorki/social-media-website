import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Header from "../components/Header";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(AuthContext);
  return !token ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Header />
      <Component />
    </>
  );
};
