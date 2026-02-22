import { useState } from "react";
import "./App.css";
import { MenuList } from "./components/MenuList";
import { Cart } from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [priceAmount, setPriceAmount] = useState(0);


// ДОБАВЛЕНИЕ В КОРЗИНУ
  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existItem = prevCart.find((item) => item.title === dish.title);

      if (existItem) {
        return prevCart.map((item) =>
          item.title === dish.title
            ? { ...item, count: (item.count || 1) + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...dish, count: 1 }];
      }
    });

    setPriceAmount((prev) => prev + dish.price);
  };

// УДАЛЕНИЕ ИЗ КОРЗИНЫ
  const deleteFromCart = (dish) => {
    setCart((prevCart) => {
      const existItem = prevCart.find((item) => item.title === dish.title);

      if (!existItem) return prevCart;

      if (existItem.count > 1) {
        return prevCart.map((item) =>
          item.title === dish.title ? { ...item, count: item.count - 1 } : item,
        );
      }
      return prevCart.filter((item) => item.title !== dish.title);
    });
    setPriceAmount((prev) => prev - dish.price);
  };

// ОЧИСТКА КОРЗИНЫ
  const cleanCart = () => {
    setCart([])
    setPriceAmount(0)
  }

  return (
    <>
      <Cart
        cart={cart}
        deleteFromCart={deleteFromCart}
        priceAmount={priceAmount}
        cleanCart={cleanCart}
      />
      <MenuList addToCart={addToCart} />
    </>
  );
}
