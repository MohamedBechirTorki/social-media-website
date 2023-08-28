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
  const isInclude = (array, element) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].user.username === element.user.username) {
        return "clicked";
      }
    }
    return "";
  };

  const [visibleComment, setVisibileComment] = useState(
    post.comments[0] ? [post.comments[0]] : []
  );
  const [typeCommentDisplay, setTypeCommentDisplay] = useState("none");

  const typeCommentRef = createRef();
  const { userProfil, token } = useContext(AuthContext);
  const [upClick, setUpClick] = useState(
    () => userProfil && isInclude(post.likes, userProfil)
  );
  const [downClick, setDownClick] = useState(
    () => userProfil && isInclude(post.unlikes, userProfil)
  );

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
    fetch("/api/add-comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access,
      },
      body: JSON.stringify({ post: post.id, content: e.target.comment.value }),
    });
    e.target.comment.value = "";
  };

  const handleUpClick = () => {
    if (upClick === "clicked") {
      setUpClick("");
      fetch("/api/remove-react/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access,
        },
        body: JSON.stringify({ post: post.id }),
      });
      post.likes = post.likes.slice(0, post.likes.length - 1);
    } else {
      setUpClick("clicked");
      fetch("/api/add-like/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access,
        },
        body: JSON.stringify({ post: post.id }),
      });
      post.likes.push({});
      if (downClick === "clicked") {
        setDownClick("");
        post.unlikes = post.unlikes.slice(0, post.unlikes.length - 1);
      }
    }
  };
  const handleDownClick = () => {
    if (downClick === "clicked") {
      setDownClick("");
      fetch("/api/remove-react/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access,
        },
        body: JSON.stringify({ post: post.id }),
      });
      post.unlikes = post.unlikes.slice(0, post.unlikes.length - 1);
    } else {
      setDownClick("clicked");
      fetch("/api/add-unlike/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.access,
        },
        body: JSON.stringify({ post: post.id }),
      });
      post.unlikes.push({});
      if (upClick === "clicked") {
        setUpClick("");
        post.likes = post.likes.slice(0, post.likes.length - 1);
      }
    }
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
          <button className={upClick} onClick={() => handleUpClick()}>
            <FontAwesomeIcon icon={faChevronUp} />
          </button>
          <button className={downClick} onClick={() => handleDownClick()}>
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
