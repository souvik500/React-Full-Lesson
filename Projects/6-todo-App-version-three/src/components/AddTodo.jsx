import { useState, useRef } from "react";
import { MdAddChart } from "react-icons/md";

function AddTodo({ addOnClick }) {
  // const [newName, setNewName] = useState("");
  // const [newDate, setNewDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const changeName = (event) => {
  //   setNewName(event.target.value);
  // };

  // const changeDate = (event) => {
  //   setNewDate(event.target.value);
  // };

  const handleAddClick = (event) => {
    event.preventDefault();

    const newName = todoNameElement.current.value;
    const newDate = dueDateElement.current.value;

    addOnClick(newName, newDate);
    // Clear input fields after adding
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddClick}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter To do Name"
            // value={newName}
            // onChange={changeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            id="todoDate"
            min="2018-01-01"
            max="2030-12-31"
            // value={newDate}
            // onChange={changeDate}
          />
        </div>

        <div className="col-2">
          <button className="btn btn-success kg-button">
            <MdAddChart />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
