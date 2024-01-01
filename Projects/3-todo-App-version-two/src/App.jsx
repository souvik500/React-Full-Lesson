import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  const itemDetails = [
    {
      id: 1,
      name: "Buy groceries",
      dueDate: "12/08/2021",
    },
    {
      id: 2,
      name: "Clean the house",
      dueDate: "20/2/2022",
    },
    {
      id: 3,
      name: "Clean the house",
      dueDate: "20/2/2022",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />

      <ToDoItems todoItems={itemDetails} />
    </center>
  );
}

export default App;
