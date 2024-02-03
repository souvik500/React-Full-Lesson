import { useContext, useRef } from "react";
import { PostListContext } from "../stores/Post-List-Store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Name
        </label>
        <input
          type="userId"
          name="userId"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your user-id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your Post Heading"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Body
        </label>
        <textarea rows={4} name="body" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          People Reaction
        </label>
        <input
          type="number"
          name="reactions"
          className="form-control"
          placeholder="Your Reaction Number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Hash Tag
        </label>
        <input
          type="tag"
          name="tags"
          className="form-control"
          placeholder="Pls Enter tag using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

/*
export async function CreatePostAction(data) {
  const formData = await data.request.formData();

  const postData = Object.fromEntries(formData);
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    })
    .catch((err) => alert(`Error! ${err}`));

  return redirect("/");
}
*/

export async function CreatePostAction(data) {
  const { addPost } = useContext(PostListContext);

  const formData = await data.request.formData();

  const postData = {};
  formData.forEach((value, key) => {
    postData[key] = value;
  });

  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
    })
    .catch((err) => alert(`Error! ${err}`));

  return redirect("/");
}

export default CreatePost;
