import React from "react";

export default function Ad({ ad }) {
  return (
    <div className="ad">
      <h5> {ad.title} </h5>
      <div className="content">
        <div className="ad-image">
          <img src={ad.pic} alt={ad.title} />
        </div>
        <p> {ad.content} </p>
      </div>
    </div>
  );
}
