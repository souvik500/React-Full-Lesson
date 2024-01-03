import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ item1 }) => {
  // let foodItem = ["Dal", "Roti", "Green Vegitable", "Salad", "Milk", "amul"];
  // let foodItems = []

  // let emptyFood = foodItems !== 0 ? null : "I am hungry";

  let [activeItem, setActiveItem] = useState([]);

  const OnClickEvent = (foodItem, event) => {
    console.log(`This ${foodItem} has been added to your cart!`);
    console.log(activeItem);
    let newItem = [...activeItem, foodItem];
    setActiveItem(newItem);
    // console.log(setActiveItem);
  };

  return (
    <>
      <ul className="list-group">
        {item1.map((i) => (
          <Items
            key={i}
            foodItem1={i}
            bought={activeItem.includes(i)}
            buyButtonOnClickEvent={(event) => OnClickEvent(i, event)}
          ></Items>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
