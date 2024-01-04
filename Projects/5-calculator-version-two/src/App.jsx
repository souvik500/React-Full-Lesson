import ShowCalculation from "./components/ShowCalculation.jsx";
import css from "./App.module.css";
import CalculatorKeys from "./components/CalculatorKeys.jsx";
import { useState } from "react";

function App() {
  const keysButton = [
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
  ];

  const onClickHandler = (bn, event) => {
    console.log(`Button Click : ${bn}`);
  };

  let [calc, setCalc] = useState([]);

  return (
    <>
      <div className={css.container}>
        <ShowCalculation inputNo={calc} />

        <CalculatorKeys
          keys={keysButton}
          onClick={(event) => onClickHandler(keysButton, event)}
        />
      </div>
    </>
  );
}

export default App;
