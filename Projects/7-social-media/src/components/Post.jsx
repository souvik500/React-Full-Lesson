const Post = ({ posts }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "30px" }}>
      <div className="card-body">
        <h5 className="card-title">{posts.Title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <span className="badge text-bg-primary">Primary</span>
      </div>
    </div>
  );
};

export default Post;
