import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useReducer } from "react";
import WelCome from "./components/Welcome";
import { ToDoItemsContext } from "./store/Todo-Items-Store";

const todoItemsReducer = (currToDOItems, action) => {
  let newTodoItems = currToDOItems;

  if (action.type == "ADD_ITEM") {
    newTodoItems = [
      ...currToDOItems,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = todoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
    /*
    
    });

    console.log(newItem.name + "," + dueDate);*/
  };

  const deleteItem = (itemName) => {
    const delItemAction = {
      type: "DELETE_ITEM",
      payload: itemName,
    };
    dispatchTodoItems(delItemAction);

    /* // Filter out the item to be deleted
    const */
  };

  return (
    <ToDoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        handleDeleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />

        <AddTodo />

        <WelCome />

        <ToDoItems />
      </center>
    </ToDoItemsContext.Provider>
  );
}

export default App;
