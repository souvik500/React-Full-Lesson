import ToDoItem from "./ToDOItem";
import PropTypes from "prop-types";
import css from "./ToDOItems.module.css";

const ToDoItems = () => {
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
      name: "Golden Room",
      dueDate: "22/12/2022",
    },
  ];

  return (
    <>
      <div className={css.itemContainer}>
        {/* {console.log(todoItems)} */}

        {itemDetails.map((i) => (
          <ToDoItem key={i.id} todoDate={i.dueDate} todoName={i.name} />
        ))}
      </div>
    </>
  );
};

ToDoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      // Add any other required properties
    })
  ).isRequired,
};

export default ToDoItems;
