import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {
  const [addtodo, setAddtodo] = useState([]);

  const handleAddItems = (itemName, dueDate) => {
    let newItem = { id: addtodo.length + 1, name: itemName, date: dueDate };
    setAddtodo([...addtodo, newItem]);
    console.log(newItem.name + "," + dueDate);
  };

  const handleDeleteItem = (itemName) => {
    // Filter out the item to be deleted
    const updatedItems = addtodo.filter((item) => item.name !== itemName);
    setAddtodo(updatedItems);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo addOnClick={handleAddItems} />

      <ToDoItems addItems={addtodo} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
