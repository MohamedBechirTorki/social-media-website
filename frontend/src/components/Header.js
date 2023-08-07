import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header({ data }) {
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
            <img src={data.pic} alt="user profile" />
          </div>
        </div>
      </header>
    </div>
  );
}
