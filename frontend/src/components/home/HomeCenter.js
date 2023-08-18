import React, { useContext } from "react";
import Post from "./homecenter/Post";
import CreatePost from "./homecenter/CreatePost";
import HomeContext from "../../contexts/HomeContext";

export default function HomeCenter() {
  const { posts } = useContext(HomeContext);
  return (
    <div className="center">
      <CreatePost />
      <div className="posts">
        {posts.map((post, idf) => (
          <Post key={idf} post={post} />
        ))}
      </div>
    </div>
  );
}
