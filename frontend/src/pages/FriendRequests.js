import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

export default function FriendRequests() {
  const { setRoute } = useContext(AuthContext);
  setRoute("/friend-requests");
  return <div>FriendRequests</div>;
}
