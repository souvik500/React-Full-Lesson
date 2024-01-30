import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addInitialPost: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPost, action) => {
  let newPost = currPost;

  if (action.type == "DELETE_POST") {
    newPost = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPost = [...currPost, action.payload];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPost = action.payload.posts;
    console.log(action.payload);
  }

  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addInitialPost = (posts) => {
    // Add a new post to the list.
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const addPost = (user_id, title, content, reactions, tags) => {
    // Add a new post to the list.
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        content,
        reactions: reactions,
        user_id: user_id,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    // Remove the last added post from the list.
    if (postList.length > 0) {
      dispatchPostList({ type: "DELETE_POST", payload: { postId } });
    }
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addInitialPost,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: `Social Media 1`,
//     content: `This is content for Social Media 1`,
//     reactions: 2,
//     user_id: "user-1",
//     tags: ["java", "c++", "c#"],
//   },

//   {
//     id: "2",
//     title: `Social Media 2`,
//     content: `This is content for Social Media 2`,
//     reactions: 20,
//     user_id: "user-2",
//     tags: ["math", "dsa", "web services"],
//   },
// ];

export default PostListProvider;
