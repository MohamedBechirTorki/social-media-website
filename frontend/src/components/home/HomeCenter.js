import React from "react";
import Post from "./homecenter/Post";

export default function HomeCenter() {
  const data = [
    {
      id: 1,
      name: "Mohamed Bechir Torki",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "Hi my name is Mohamed Bechir Torki",
    },
    {
      id: 2,
      name: "Mohamed Ahmed",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "This is my post ",
    },
    {
      id: 3,
      name: "Mohamed Oussama",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "This is other post",
    },
  ];
  return (
    <div className="center">
      <div className="create-poste"></div>
      <div className="posts">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
