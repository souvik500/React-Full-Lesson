import { useContext } from "react";
import { ToDoItemsContext } from "../store/Todo-Items-Store";

const WelCome = () => {
  const contextObject = useContext(ToDoItemsContext);

  const todoItems = contextObject.todoItems;

  return (
    todoItems.length === 0 && (
      <div className="welcome">
        <p>Are you Thrustry</p>
      </div>
    )
  );
};

export default WelCome;
