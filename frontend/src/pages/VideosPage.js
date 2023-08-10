import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function VideosPage() {
  const { setRoute } = useContext(AuthContext);
  setRoute("/videos");
  return <div>VideosPage</div>;
}
