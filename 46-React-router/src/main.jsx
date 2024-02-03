import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PostList, { PostLoader } from "./components/PostList.jsx";
import CreatePost, { CreatePostAction } from "./components/Createpost.jsx";

const router = createBrowserRouter([
  // Add your routes here
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: async () => await PostLoader(),
      },

      {
        path: "/create-post",
        element: <CreatePost />,
        action: CreatePostAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
