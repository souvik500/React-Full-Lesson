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
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

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

const DEFAULT_POST_LIST = [
  {
    id: "1",
    Title: `Social Media 1`,
    Content: `This is content for Social Media 1`,
    reactions: 2,
    user_id: "user-1",
    tags: ["java", "c++", "c#"],
  },

  {
    id: "2",
    Title: `Social Media 2`,
    Content: `This is content for Social Media 2`,
    reactions: 20,
    user_id: "user-2",
    tags: ["math", "dsa", "web services"],
  },
];

export default PostListProvider;
