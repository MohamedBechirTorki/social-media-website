import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import People from "../components/FR/People";

export default function FriendRequests() {
  const [peoples, setPeoples] = useState([]);
  const { token } = useContext(AuthContext);
  const fetchPeoples = async () => {
    let response = await fetch("/api/peoples-you-may-know/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access,
      },
    });
    let data = await response.json();
    setPeoples(data);
  };

  useState(() => {
    fetchPeoples();
  }, []);
  return (
    <main className="container-sm">
      <h3>Peoples you may know</h3>
      {peoples.map((people, idf) => (
        <People key={idf} people={people} />
      ))}
    </main>
  );
}
