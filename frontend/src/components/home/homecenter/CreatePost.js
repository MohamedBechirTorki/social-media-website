import React from "react";

export default function CreatePost() {
  return (
    <form className="create-post">
      <h5>Create post</h5>
      <div className="poster">
        <img
          src="https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg"
          alt="your profile"
        />
        <span>User account</span>
      </div>
      <textarea placeholder="What's on your mind?"></textarea>
      <input type="file" />
      <button>Post</button>
    </form>
  );
}
