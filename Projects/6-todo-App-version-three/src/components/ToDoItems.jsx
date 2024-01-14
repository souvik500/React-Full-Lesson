import { useContext } from "react";
import ToDoItem from "./ToDOItem";
import css from "./ToDOItems.module.css";
import { ToDoItemsContext } from "../store/Todo-Items-Store";

const ToDoItems = () => {
  // const itemDetails = [
  //   {
  //     id: 1,
  //     name: "Buy groceries",
  //     dueDate: "12/08/2021",
  //   },
  //   {
  //     id: 2,
  //     name: "Clean the house",
  //     dueDate: "20/2/2022",
  //   },
  //   {
  //     id: 3,
  //     name: "Golden Room",
  //     dueDate: "22/12/2022",
  //   },
  // ];

  const { todoItems } = useContext(ToDoItemsContext);

  return (
    <>
      <div className={css.itemContainer}>
        {/* {console.log(todoItems)} */}

        {todoItems.map((i) => (
          <ToDoItem
            key={i.id}
            id={i.id}
            todoName={i.name}
            todoDate={i.date}
            // onDelete={() => deleteItem(i.name)}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
