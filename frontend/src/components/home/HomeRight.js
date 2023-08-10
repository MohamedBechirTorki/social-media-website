import React from "react";
import Ad from "./homeright/Ad";

export default function HomeRight() {
  const data = [
    {
      id: 1,
      title: "Learn python",
      content: "This is a python basics course",
      pic: "https://img.pikbest.com/origin/06/44/25/55hpIkbEsT8P2.jpg!w700wp",
    },
    {
      id: 2,
      title: "Fridge for sell",
      content: "Best Fridge ever",
      pic: "https://i.pinimg.com/originals/5a/82/1d/5a821d2798091ba5839dda1648c502d5.png",
    },
  ];

  return (
    <div className="right">
      <h4>Sponsored</h4>
      <div className="ads">
        {data.map((ad) => (
          <Ad key={ad.id} ad={ad} />
        ))}
      </div>
    </div>
  );
}
