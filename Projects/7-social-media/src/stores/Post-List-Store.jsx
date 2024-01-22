import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPost, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...currPost, action.payload];
    case "DELETE_LAST_POST":
      return currPost.slice(0, -1);
    default:
      return currPost;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, [
    { id: 2 },
    { id: 3 },
  ]);

  const addPost = () => {
    // Add a new post to the list.
    dispatchPostList({ type: "ADD_POST", payload: {} });
  };

  const deletePost = () => {
    // Remove the last added post from the list.
    if (postList.length > 0) {
      dispatchPostList({ type: "DELETE_LAST_POST" });
    }
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
