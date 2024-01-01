import ShowCalculation from "./components/ShowCalculation.jsx";
import css from "./App.module.css";
import CalculatorKeys from "./components/CalculatorKeys.jsx";

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

  return (
    <>
      <div className={css.container}>
        <ShowCalculation />

        <CalculatorKeys keys={keysButton} />
      </div>
    </>
  );
}

export default App;
