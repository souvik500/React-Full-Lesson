import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../stores/Post-List-Store";
import WelComeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListContext);
  // console.log(postList);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {fetching && postList.length === 0 && <WelComeMessage />}
      {!fetching &&
        postList.map((posts) => <Post key={posts.id} posts={posts} />)}
    </>
  );
};

export default PostList;
