export const CartList = ({ items, deleteFromCart }) => {

    console.log(items.title)
  return (
    <div className="cartList">
      {items.map((item, index) => (
        <div key={index} className="dishCard">
          <img src={item.img} alt="" />
          <h2>{item.title} x{item.count}</h2>
          <p>{item.price * item.count} руб</p>
          <button onClick={() => deleteFromCart(item)}>🗑</button>
        </div>
      ))}
    </div>
  );
};
 