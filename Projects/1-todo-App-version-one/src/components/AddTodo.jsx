function AddTodo() {
  return (
    
    <div class="container text-center">

      <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter To do Name" />
        </div>
        <div class="col-4">
          <input type="date" placeholder="" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>

    </div>
  );
}

export default AddTodo;
