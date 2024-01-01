import css from "./Item.module.css";

const Items = ({ foodItem1, buyButtonOnClickEvent }) => {
  return (
    <>
      <li className={`list-group-item ${css.kgItems}`}>
        <span className={css["kg-span"]}>{foodItem1}</span>
        <button
          className={`btn btn-info ${css["button-buy"]}`}
          onClick={buyButtonOnClickEvent}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Items;
