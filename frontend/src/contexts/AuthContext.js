import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [userProfil, setUserProfil] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("AuthToken")
      ? JSON.parse(localStorage.getItem("AuthToken"))
      : null
  );
  const LoginUser = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    if (response.status === 200) {
      let data = await response.json();
      setToken(data);
      fetchUserProfile(data);
      localStorage.setItem("AuthToken", JSON.stringify(data));
    } else {
      console.error("Login error");
    }
  };
  const fetchUserProfile = async (token) => {
    let response = await fetch(
      `/api/get-user-info/${jwt_decode(token.access).username}/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(token.access),
        },
      }
    );
    let data = await response.json();
    if (response.status === 200) {
      setUserProfil(data);
    } else {
      console.error("Getting user info error !");
    }
  };

  const updateToken = async () => {
    let response = await fetch("/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: token.refresh }),
    });
    let data = await response.json();
    setToken(data);
    localStorage.setItem("AuthToken", JSON.stringify(data));
    fetchUserProfile(token);
  };
  useEffect(() => {
    updateToken();
    const inter = setInterval(() => updateToken(), 270000);
    return () => clearInterval(inter);
  }, []);

  const contextData = {
    token: token,
    LoginUser: LoginUser,
    userProfil: userProfil,
    setUserProfil: setUserProfil,
    setToken: setToken,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
