import { useGetUserCartQuery } from "../../../../store/slices/apiSlice";

const CartDrop = () => {
  const { data: cartData, isLoading } = useGetUserCartQuery();
  if (isLoading) return <p>Loading...</p>;
  if (!cartData) return <p>You should log in to see your cart</p>;
  if (cartData.length === 0) return <p>Your cart is empty.</p>;
  return (
    <div>
      <ul>
        {cartData.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
