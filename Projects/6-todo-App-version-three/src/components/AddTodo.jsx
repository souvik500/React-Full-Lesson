import React, { useState } from "react";

function AddTodo({ addOnClick }) {
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");

  const changeName = (event) => {
    setNewName(event.target.value);
  };

  const changeDate = (event) => {
    setNewDate(event.target.value);
  };

  const handleAddClick = () => {
    // Check if both name and date are not empty before adding
    if (newName.trim() !== "" && newDate.trim() !== "") {
      addOnClick(newName, newDate);
      // Clear input fields after adding
      setNewName("");
      setNewDate("");
    }
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter To do Name"
            value={newName}
            onChange={changeName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="todoDate"
            min="2018-01-01"
            max="2030-12-31"
            value={newDate}
            onChange={changeDate}
          />
        </div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
