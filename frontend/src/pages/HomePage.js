import React, { useContext } from "react";
import HomeLeft from "../components/home/HomeLeft";
import HomeCenter from "../components/home/HomeCenter";
import HomeRight from "../components/home/HomeRight";
import AuthContext from "../contexts/AuthContext";

export default function HomePage() {
  const { setRoute } = useContext(AuthContext);
  setRoute("/");
  return (
    <main className="home">
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </main>
  );
}
