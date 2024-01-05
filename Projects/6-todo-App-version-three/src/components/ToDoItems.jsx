import ToDoItem from "./ToDOItem";
import css from "./ToDOItems.module.css";

const ToDoItems = ({ addItems, handleDeleteItem }) => {
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

  return (
    <>
      <div className={css.itemContainer}>
        {/* {console.log(todoItems)} */}

        {addItems.map((i) => (
          <ToDoItem
            key={i.id}
            todoName={i.name}
            todoDate={i.date}
            onDelete={handleDeleteItem}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoItems;
