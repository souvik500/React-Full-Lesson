import css from "./CalculatorKeys.module.css";

const CalculatorKeys = ({ keys }) => {
  console.log(keys);
  return (
    <>
      <div className={css.calculatorKeys}>
        {keys.map((k) => (
          <button className="operator" key={k}>
            {k}
          </button>
        ))}
      </div>
    </>
  );
};

export default CalculatorKeys;
