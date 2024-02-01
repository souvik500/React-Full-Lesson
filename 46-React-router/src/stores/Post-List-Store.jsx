import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPost, action) => {
  let newPost = currPost;

  if (action.type == "DELETE_POST") {
    newPost = currPost.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currPost];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPost = action.payload;
  }

  return newPost;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const [fetching, setFetching] = useState(false);

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: posts,
    });
  };

  const addPost = (post) => {
    // Add a new post to the list.
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    // Remove the last added post from the list.
    if (postList.length > 0) {
      dispatchPostList({
        type: "DELETE_POST",
        payload: { postId },
      });
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false);
      })
      .catch((error) => console.error("Error fetching data:", error));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{
        postList,
        fetching,
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
