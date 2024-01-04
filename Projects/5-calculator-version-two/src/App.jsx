import ShowCalculation from "./components/ShowCalculation.jsx";
import css from "./App.module.css";
import CalculatorKeys from "./components/CalculatorKeys.jsx";
import { useState } from "react";

function App() {
  const onClickHandler = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      try {
        let result = eval(calVal);

        setCalVal(`${calVal} = ${result}`);
      } catch {
        alert("Error!");
      }
    } else {
      const newDisplayVal = calVal + buttonName;
      setCalVal(newDisplayVal);
    }
  };

  let [calVal, setCalVal] = useState("");

  return (
    <>
      <div className={css.container}>
        <ShowCalculation inputNo={calVal} />

        <CalculatorKeys onClickButton={onClickHandler} />
      </div>
    </>
  );
}

export default App;
