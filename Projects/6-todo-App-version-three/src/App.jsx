import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {
  const [addtodo, setAddtodo] = useState([]);

  const handleAddItems = (itemName, dueDate) => {
    //   console.log("The button was clicked!");
    let newItem = { itemName: itemName, dueDate: dueDate };
    setAddtodo([...addtodo, newItem]);
  };

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo addOnClick={handleAddItems} />

      <ToDoItems />
    </center>
  );
}

export default App;
