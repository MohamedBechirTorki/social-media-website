import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import HomeContext from "../../../contexts/HomeContext";

export default function CreatePost() {
  const { userProfil } = useContext(AuthContext);
  const { createPost } = useContext(HomeContext);
  return (
    <form className="create-post" onSubmit={(e) => createPost(e)}>
      <h5>Create post</h5>
      <div className="poster">
        <img
          src="https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg"
          alt="your profile"
        />
        <span>{userProfil ? userProfil.user.username : "username"}</span>
      </div>
      <textarea name="content" placeholder="What's on your mind?"></textarea>
      <input name="image" type="file" />
      <button>Post</button>
    </form>
  );
}
