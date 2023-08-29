import React from "react";

export default function People({ people }) {
  return (
    <div>
      <div className="image">
        <img src={people.profile_pic} />
      </div>
      <h5>{people.user.username}</h5>
    </div>
  );
}
