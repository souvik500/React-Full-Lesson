import css from "./CalculatorKeys.module.css";

const CalculatorKeys = ({ onClickButton }) => {
  const buttonNames = [
    "C",
    "+",
    "-",
    "*",
    "/",
    "%",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
  ];

  return (
    <>
      <div className={css.calculatorKeys}>
        {buttonNames.map((buttonNames) => (
          <button
            key={buttonNames}
            className={css.operator}
            onClick={() => onClickButton(buttonNames)}
          >
            {buttonNames}
          </button>
        ))}
      </div>
    </>
  );
};

export default CalculatorKeys;
