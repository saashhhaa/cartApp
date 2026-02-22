export const DishCard = ({ title, price, addToCart, img }) => {
  return (
    <div className="dishCard">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{price} руб</p>
      <button onClick={addToCart}>+</button>
    </div>
  );
};
