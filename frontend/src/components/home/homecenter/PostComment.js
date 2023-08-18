import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function PostComment({ comment }) {
  console.log(comment)
  return (
    <div className="comment">
      <div className="comment-left">
        <img src={comment.user.profile_pic} alt="user post this" />
      </div>

      <div className="comment-right">
        <h4>{comment.user.user.username}</h4>

        <div className="content">
          <p>{comment.content}</p>
        </div>
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
      </div>
    </div>
  );
}
