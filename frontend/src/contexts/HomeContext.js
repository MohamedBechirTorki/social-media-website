import { createContext, useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const HomeContext = createContext();
export default HomeContext;

export const HomeProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(AuthContext);

  const createPost = async (e) => {
    e.preventDefault();
    fetch("/api/create-post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access,
      },
      body: JSON.stringify({
        content: e.target.content.value,
        image: e.target.image.value,
      }),
    });
  };

  const fetchPosts = async () => {
    let response = await fetch("/api/get-posts/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access,
      },
    });
    let data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  const contextData = {
    createPost: createPost,
    posts: posts,
  };
  return (
    <HomeContext.Provider value={contextData}>{children}</HomeContext.Provider>
  );
};
