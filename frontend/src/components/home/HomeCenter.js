import React from "react";
import Post from "./homecenter/Post";
import CreatePost from "./homecenter/CreatePost";

export default function HomeCenter() {
  const data = [
    {
      id: 1,
      name: "Mohamed Bechir Torki",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "Hi my name is Mohamed Bechir Torki",
      comments: [
        {
          id: 1,
          name: "John shelby",
          pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
          content: "YFZ",
        },
        {
          id: 2,
          name: "Mahmoud Ahmed",
          pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
          content: "Atacharafou bi ma3rifatika",
        },
      ],
    },
    {
      id: 2,
      name: "Mohamed Ahmed",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "This is my post ",
      comments: [],
    },
    {
      id: 3,
      name: "Mohamed Oussama",
      pic: "https://img.freepik.com/icones-gratuites/utilisateur_318-159711.jpg",
      content: "This is another post",
      comments: [],
    },
  ];
  return (
    <div className="center">
      <CreatePost />
      <div className="posts">
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
