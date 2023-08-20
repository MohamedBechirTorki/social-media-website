import React, { useState, createRef, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faComment,
  faShare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import PostComment from "./PostComment";
import AuthContext from "../../../contexts/AuthContext";

export default function Post({ post }) {
  const [visibleComment, setVisibileComment] = useState(
    post.comments[0] ? [post.comments[0]] : []
  );
  const [typeCommentDisplay, setTypeCommentDisplay] = useState("none");
  const typeCommentRef = createRef();
  const { userProfil } = useContext(AuthContext);
  useEffect(() => {
    typeCommentRef.current.focus();
  }, [typeCommentDisplay, typeCommentRef]);

  const submitComment = async (e) => {
    e.preventDefault();
    setVisibileComment([
      ...visibleComment,
      { user: userProfil, content: e.target.comment.value },
    ]);
    post.comments.push({ user: userProfil, content: e.target.comment.value });
    e.target.comment.value = "";
  };
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.poster.profile_pic} alt="user post this" />
        <h4>{post.poster.user.username}</h4>
      </div>
      <div className="post-main">
        <p>{post.content}</p>
      </div>
      <div className="post-footer">
        <div className="react">
          <div className="react-counter">
            <span>{post.likes.length - post.unlikes.length}</span>
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
        <form onSubmit={(e) => submitComment(e)}>
          <input
            ref={typeCommentRef}
            type="text"
            placeholder="Type a comment"
            autoFocus
            name="comment"
          />
          <button>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
      <div className="comments">
        {visibleComment.map((comment, idf) => (
          <PostComment key={idf} comment={comment} />
        ))}
        {visibleComment.length < post.comments.length && (
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
