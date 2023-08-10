import React, { useContext } from "react";
import HomeLeft from "../components/home/HomeLeft";
import HomeCenter from "../components/home/HomeCenter";
import HomeRight from "../components/home/HomeRight";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function HomePage() {
  const { isLogged } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isLogged) {
    navigate("/login");
  }
  return (
    <main className="home">
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </main>
  );
}
