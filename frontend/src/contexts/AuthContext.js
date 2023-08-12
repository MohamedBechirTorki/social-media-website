import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [route, setRoute] = useState("/");
  const [user, setUser] = useState(
    localStorage.getItem("AuthToken")
      ? JSON.parse(localStorage.getItem("AuthToken")).access
      : null
  );
  const [userProfil, setUserProfil] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("AuthToken")
      ? JSON.parse(localStorage.getItem("AuthToken"))
      : null
  );
  const navigate = useNavigate();
  const LoginUser = async (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    console.log(e.target.password.value);
    let response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();
    setUser(jwt_decode(data.access));
    setToken(data);
    localStorage.setItem("AuthToken", JSON.stringify(data));
    navigate(route);
  };

  const contextData = {
    LoginUser: LoginUser,
    setRoute: setRoute,
    user: user,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
