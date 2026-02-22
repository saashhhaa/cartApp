import { DishCard } from "./DishCard";
import { dishes } from "../data";
import { Filter } from "./Filter";
import { useState } from "react";

export const MenuList = ({ addToCart }) => {
  const dishesList = Object.values(dishes);
  const [filterSelect, setFilterSelect] = useState("");

// ФИЛЬТРАЦИЯ
 const onFilterChange = (type) => {
  setFilterSelect((prev) => (prev === type ? "" : type))

 }

const filteredDishes = filterSelect
  ? dishesList.filter((item) => item.type === filterSelect)
  : dishesList;
 

  return (
    <div className="menuList">
      <div className="cover">
        <h1>Меню</h1>
        <Filter onFilterChange={onFilterChange} activeFilter={filterSelect} />
      </div>
      {filteredDishes.map((dish, index) => (
        <DishCard
          key={index}
          img={dish.img}
          title={dish.title}
          price={dish.price}
          addToCart={() => addToCart(dish)}
        />
      ))}
    </div>
  );
};
