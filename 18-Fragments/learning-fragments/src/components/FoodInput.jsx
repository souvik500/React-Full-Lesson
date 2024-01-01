import css from "./FoodInput.module.css";

const FoodInput = ({ handelOnKeyDownEvent }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter food Item"
        className={css.foodinput}
        onKeyDown={handelOnKeyDownEvent}
      />
    </>
  );
};

export default FoodInput;
