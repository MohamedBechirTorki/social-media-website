import React, { useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import HomeContext from "../../../contexts/HomeContext";

export default function CreatePost() {
  const { userProfil } = useContext(AuthContext);
  const { createPost } = useContext(HomeContext);
  console.log(userProfil)
  if (!userProfil) {
    return <h3>Loading ...</h3>
  }

  return (
    <form className="create-post" onSubmit={(e) => createPost(e)}>
      <h5>Create post</h5>
      <div className="poster">
        <img
          src={userProfil.profil_pic}
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
