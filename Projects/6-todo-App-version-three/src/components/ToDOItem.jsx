import { RiDeleteBin2Fill } from "react-icons/ri";

function ToDoItem({ todoName, todoDate, onDelete }) {
  console.log(todoName, todoDate);

  const handleDelete = () => {
    // Call the onDelete callback with the todoName or any other identifier
    onDelete(todoName);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDelete}
          >
            <RiDeleteBin2Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
