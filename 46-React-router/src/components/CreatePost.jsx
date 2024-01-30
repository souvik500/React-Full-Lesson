import { useContext, useRef } from "react";
import { PostListContext } from "../stores/Post-List-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userId = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_id = userId.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reactions = reactionElement.current.value; // TODO: implement reactions
    const tags = tagElement.current.value.split(" ");

    /*userId.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";*/

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: content,
        reactions: reactions,
        userId: user_id,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Name
        </label>
        <input
          type="userId"
          ref={userId}
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
          ref={titleElement}
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Your Post Heading"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Post Body
        </label>
        <textarea
          rows={4}
          ref={contentElement}
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          People Reaction
        </label>
        <input
          type="number"
          ref={reactionElement}
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
          ref={tagElement}
          className="form-control"
          placeholder="Pls Enter tag using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
