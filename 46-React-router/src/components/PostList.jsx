import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../stores/Post-List-Store";
import WelComeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);
  // console.log(`fetching : ${fetching}`);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelComeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} posts={post} />)}
    </>
  );
};

export default PostList;
