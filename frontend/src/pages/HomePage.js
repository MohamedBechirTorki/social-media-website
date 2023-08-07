import React from "react";
import HomeLeft from "../components/home/HomeLeft";
import HomeCenter from "../components/home/HomeCenter";
import HomeRight from "../components/home/HomeRight";

export default function HomePage() {
  return (
    <main className="home">
      <HomeLeft />
      <HomeCenter />
      <HomeRight />
    </main>
  );
}
