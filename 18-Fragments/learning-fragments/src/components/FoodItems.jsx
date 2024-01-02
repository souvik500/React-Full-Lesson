import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ item1 }) => {
  // let foodItem = ["Dal", "Roti", "Green Vegitable", "Salad", "Milk", "amul"];
  // let foodItems = []

  // let emptyFood = foodItems !== 0 ? null : "I am hungry";

  let [] = useState([]);

  const buyButtonOnClickEvent = (foodItem) => {
    console.log(`This ${foodItem} has been added to your cart!`);
  };

  return (
    <>
      <ul className="list-group">
        {item1.map((i) => (
          <Items
            key={i}
            foodItem1={i}
            buyButtonOnClickEvent={() => buyButtonOnClickEvent(i)}
          ></Items>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
