import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostListContext } from "../stores/Post-List-Store";
import WelComeMessage from "./WelcomeMessage";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  // console.log(postList);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      });
  }, []);

  const handleGetRequest = () => {};

  return (
    <>
      {postList.length === 0 && (
        <WelComeMessage getRequest={handleGetRequest} />
      )}
      {postList.map((posts) => (
        <Post key={posts.id} posts={posts} />
      ))}
    </>
  );
};

export default PostList;
