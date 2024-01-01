import "./App.css";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItem = [
  //   "Dal",
  //   "Roti",
  //   "Green Vegitable",
  //   "Salad",
  //   "Milk",
  //   "amul",
  //   "Guhava",
  //   "Banana",
  // ];

  const [foodItem, setfoodItem] = useState([]);

  const handelOnKeyDownEvent = (event) => {
    if (event.key === "Enter") {
      let newFood = event.target.value;
      let newIntems = [...foodItem, newFood];
      setfoodItem(newIntems);
      event.target.value = "";
    }
    // trget.value => is Javascript property for taking actuall value;
    // console.log(event.target.value);
    // setTextToShow(event.target.value);
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>

      <FoodInput handelOnKeyDownEvent={handelOnKeyDownEvent} />
      <p>{foodItem}</p>

      <FoodItems item1={foodItem} />
    </Container>
  );
}

export default App;
