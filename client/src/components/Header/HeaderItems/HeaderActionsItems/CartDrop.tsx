import { useGetUserCartQuery } from "../../../../store/slices/apiSlice";

const CartDrop = () => {
  const { data: cartData, isLoading } = useGetUserCartQuery();
  const cart = cartData?.cart || [];

  if (isLoading) return <p>Loading...</p>;
  if (!cart) return <p>You should log in to see your cart</p>;
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <ul>
        {cart.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
