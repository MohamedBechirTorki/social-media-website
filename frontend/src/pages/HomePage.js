import React from "react";
import HomeLeft from "../components/home/HomeLeft";
import HomeCenter from "../components/home/HomeCenter";
import HomeRight from "../components/home/HomeRight";
import { HomeProvider } from "../contexts/HomeContext";

export default function HomePage() {
  return (
    <main className="home">
      <HomeLeft />
      <HomeProvider>
        <HomeCenter />
      </HomeProvider>
      <HomeRight />
    </main>
  );
}
