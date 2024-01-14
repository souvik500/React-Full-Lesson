import { createContext, useReducer } from "react";

export const ToDoItemsContext = createContext([]);

const todoItemsReducer = (currToDOItems, action) => {
  let newTodoItems = currToDOItems;

  if (action.type == "ADD_ITEM") {
    newTodoItems = [
      ...currToDOItems,
      {
        id: Math.floor(Math.random() * 32),
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    console.log(action);
    newTodoItems = currToDOItems.filter((item) => item.id !== action.payload);
  }

  console.log("currTodoItems: ", newTodoItems);

  return newTodoItems;
};

//new Component-----------------------

const ToDoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: id,
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <>
      <ToDoItemsContext.Provider
        value={{
          todoItems,
          addNewItems,
          deleteItem,
        }}
      >
        {children}
      </ToDoItemsContext.Provider>
    </>
  );
};

export default ToDoItemsContextProvider;
