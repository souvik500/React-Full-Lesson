import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";

import { PostListContext } from "../stores/Post-List-Store";

const Post = ({ posts }) => {
  const { deletePost } = useContext(PostListContext);
  console.log(posts);
  return (
    <div className="card" style={{ width: "30rem", margin: "30px" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle 
      badge rounded-pill bg-danger"
        onClick={() => deletePost(posts.id)}
      >
        <MdDeleteForever />
      </span>
      <div className="card-body">
        <h5 className="card-title">{posts.title}</h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary postTag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reaction" role="alert">
          People reaction on your post : {posts.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
