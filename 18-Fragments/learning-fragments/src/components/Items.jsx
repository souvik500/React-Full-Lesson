import css from "./Item.module.css";

const Items = ({ foodItem1, bought, buyButtonOnClickEvent }) => {
  return (
    <>
      <li className={`list-group-item ${css.kgItems}`}>
        <span className={css["kg-span"]}>{foodItem1}</span>
        <button
          className={`btn btn-info ${css["button-buy"]}`}
          onClick={buyButtonOnClickEvent}
          onClick={bought}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Items;
