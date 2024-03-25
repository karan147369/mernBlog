import React, { useEffect,useState } from "react";
import Post from "../Post.jsx";
function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:4000/post").then((response) => {
      response.json((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return <>{posts.length > 0 && posts.map((post) => 
    <Post {...post}/>)}</>;
}

export default IndexPage;
