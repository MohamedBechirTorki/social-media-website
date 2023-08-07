import React from "react";
import Shortcut from "./homeleft/Shortcut";
export default function HomeLeft() {
  const data = [
    {
      title: "Groupe 1",
      link: "",
    },
    {
      title: "Groupe 2",
      link: "",
    },
    {
      title: "Groupe 3",
      link: "",
    },
    {
      title: "Groupe 4",
      link: "",
    },
    {
      title: "Groupe 5",
      link: "",
    },
    {
      title: "Groupe 6",
      link: "",
    },
  ];

  return (
    <div className="left">
      <div className="shortcuts">
        <h4>Your shortcuts</h4>
        <div className="content">
          {data.map((shortcut, idf) => (
            <Shortcut key={idf} shortcut={shortcut} />
          ))}
        </div>
      </div>
    </div>
  );
}
