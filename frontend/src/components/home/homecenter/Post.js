import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import PostComment from "./PostComment";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.pic} alt="user post this" />
        <h4>{post.name}</h4>
      </div>
      <div className="post-main">
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
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
          <FontAwesomeIcon icon={faComment} /> <span>Comment</span>
        </div>
        <div className="share">
          <FontAwesomeIcon icon={faShare} /> <span>Share</span>
        </div>
      </div>
      <div className="comments">
        {post.comments.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
