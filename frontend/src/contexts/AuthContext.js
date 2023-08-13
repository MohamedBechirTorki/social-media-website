import { createContext, useEffect, useState } from "react";

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
    if (response.status === 200) {
      let data = await response.json();
      setToken(data);
      localStorage.setItem("AuthToken", JSON.stringify(data));
    } else {
      console.error("Login error");
    }
  };
  const fetchUserProfile = async (token) => {
    let response = await fetch("http://127.0.0.1:8000/api/get-user-info/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(token.access),
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      console.log(data);
      setUserProfil(data);
    } else {
      console.error("Getting user info error !");
    }
  };

  const updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: token.refresh }),
    });
    let data = await response.json();
    setToken(data);
    localStorage.setItem("AuthToken", JSON.stringify(data));
  };
  const initializeUser = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: token.refresh }),
    });
    let data = await response.json();
    setToken(data);
    console.log(data);
    localStorage.setItem("AuthToken", JSON.stringify(data));
    fetchUserProfile(data);
  };
  useEffect(() => {
    token && initializeUser();
    const inter = setInterval(() => updateToken(), 270000);
    return () => clearInterval(inter);
  }, []);

  const contextData = {
    token: token,
    LoginUser: LoginUser,
    userProfil: userProfil,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
