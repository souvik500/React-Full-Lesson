import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../stores/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  console.log(postList);

  return (
    <>
      {postList.map((post, index) => (
        <Post key={index} post />
      ))}
    </>
  );
};

export default PostList;
