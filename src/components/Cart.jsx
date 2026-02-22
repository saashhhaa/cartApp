import { CartList } from "./CartList";

export const Cart = ({ cart, deleteFromCart, priceAmount, cleanCart }) => {
  return (
    <div className="cart">
      <div className="cover">
        <h1>Корзина:</h1>
        <div className="amountCartCounter">
          {cart.length != 0 ? (
            <h2>
              Итого: <span style={{ fontSize: "18px" }}>{priceAmount} руб</span>
            </h2>
          ) : (
            <p></p>
          )}
        </div>
      </div>

      {cart.length != 0 ? (
        <>
          <CartList items={cart} deleteFromCart={deleteFromCart} />
          <button onClick={cleanCart}>Очистить корзину</button>
        </>
      ) : (
        <p style={{ color: "hsl(142, 65%, 30%)", marginBottom:"40px" }}>Корзина пуста</p>
      )}
    </div>
  );
};
