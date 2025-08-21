const CartDrop = ({ cartItems }) => {
  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
