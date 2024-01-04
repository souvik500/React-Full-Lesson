function AddTodo({ addOnClick }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To do Name"
            onChange={changeName}
          />
        </div>
        <div className="col-4">
          <input type="date" placeholder="" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={() => addOnClick("a", "b")}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
