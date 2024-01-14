import { useContext } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { ToDoItemsContext } from "../store/Todo-Items-Store";

function ToDoItem({ id, todoName, todoDate }) {
  // console.log(todoName, todoDate);

  const { deleteItem } = useContext(ToDoItemsContext);

  const handleDelete = () => {
    // Call the onDelete callback with the todoName or any other identifier
    deleteItem(id);
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
