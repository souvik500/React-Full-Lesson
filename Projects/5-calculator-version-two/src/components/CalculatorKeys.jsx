import css from "./CalculatorKeys.module.css";

const CalculatorKeys = ({ keys, onClick }) => {
  console.log(keys);
  return (
    <>
      <div className={css.calculatorKeys}>
        {keys.map((k) => (
          <button className=`${operator} ${k === "=" ? "equals" : ""}` key={k} onClick={onClick}>
            {k}
          </button>
        ))}
      </div>
    </>
  );
};

export default CalculatorKeys;
