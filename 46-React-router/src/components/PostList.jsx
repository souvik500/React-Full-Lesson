import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../stores/Post-List-Store";
import WelComeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList } = useContext(PostListContext);
  // console.log(`fetching : ${fetching}`);
  const postList = useLoaderData();
  // console.log(postList);

  return (
    <>
      {postList.length === 0 && <WelComeMessage />}
      {postList.map((post) => (
        <Post key={post.id} posts={post} />
      ))}
    </>
  );
};

export const PostLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching data:", error);
    // You might want to handle the error or return a default value here
    return [];
  }
};

export default PostList;
