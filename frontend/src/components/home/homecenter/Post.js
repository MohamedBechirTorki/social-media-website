import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="header">
        <img src={post.pic} />
        <h4>{post.name}</h4>
      </div>
      <div className="main">
        <p>{post.content}</p>
      </div>
      <div className="footer">
        <div className="react">
          <div className="react-counter">
            <span>0</span>
          </div>
          <button>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
        <div className="comment">
          <FontAwesomeIcon icon={faComment} />
        </div>
        <div className="share">
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </div>
  );
}
