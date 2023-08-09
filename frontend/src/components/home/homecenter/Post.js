import React, { useState, createRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faComment,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import PostComment from "./PostComment";

export default function Post({ post }) {
  const [visibleComment, setVisibileComment] = useState(
    post.comments[0] ? [post.comments[0]] : []
  );
  const [typeCommentDisplay, setTypeCommentDisplay] = useState("none");
  const typeCommentRef = createRef();

  useEffect(() => {
    typeCommentRef.current.focus();
  }, [typeCommentDisplay, typeCommentRef]);
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
        <div className="comment" onClick={() => setTypeCommentDisplay("block")}>
          <FontAwesomeIcon icon={faComment} /> <span>Comment</span>
        </div>
        <div className="share">
          <FontAwesomeIcon icon={faShare} /> <span>Share</span>
        </div>
      </div>
      <div className="type-comment" style={{ display: typeCommentDisplay }}>
        <form>
          <input
            ref={typeCommentRef}
            type="text"
            placeholder="Type a comment"
            autoFocus
          />
          <button>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
      <div className="comments">
        {visibleComment.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
        {visibleComment.length !== post.comments.length && (
          <p
            onClick={() => {
              setVisibileComment(
                post.comments.slice(0, visibleComment.length + 3)
              );
            }}
            className="show-more"
          >
            Show more
          </p>
        )}
      </div>
    </div>
  );
}
