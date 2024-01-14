import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import ToDoItems from "./components/ToDoItems";

import WelCome from "./components/Welcome";
import ToDoItemsContextProvider from "./store/Todo-Items-Store";

function App() {
  return (
    <ToDoItemsContextProvider>
      <center className="todo-container">
        <AppName />

        <AddTodo />

        <WelCome />

        <ToDoItems />
      </center>
    </ToDoItemsContextProvider>
  );
}

export default App;
