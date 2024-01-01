import ToDoItem from "./ToDOItem";
import PropTypes from "prop-types";
import css from "./ToDOItems.module.css";

const ToDoItems = ({ todoItems }) => {
  return (
    <>
      <div className={css.itemContainer}>
        {/* {console.log(todoItems)} */}

        {todoItems.map((i) => (
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
