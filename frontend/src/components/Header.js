import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
const picUrl =
  "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg";

export default function Header() {
  const { userProfil } = useContext(AuthContext);
  return (
    <div className="app-header">
      <header className="container">
        <h1 className="title">Torki Social Media</h1>
        <div className="center">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to="/friend-requests">
            <FontAwesomeIcon icon={faUserGroup} />
          </Link>
          <Link to="/videos" className="videos-icon">
            <FontAwesomeIcon icon={faPlay} />
          </Link>
        </div>
        <div className="right">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="profile-pic">
            <img
              src={userProfil && userProfil.image ? userProfil.image : picUrl}
              alt="user profile"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
