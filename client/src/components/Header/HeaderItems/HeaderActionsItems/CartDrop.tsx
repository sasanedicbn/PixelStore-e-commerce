import {
  useGetUserCartQuery,
  useUpdateCartMutation,
} from "../../../../store/slices/apiSlice";
import Button from "../../../../UX/Button";

const CartDrop = () => {
  const { data: cartData, isLoading } = useGetUserCartQuery();
  const [updateCartItem] = useUpdateCartMutation();
  const cart = cartData?.cart || [];

  if (isLoading) return <p>Loading...</p>;
  if (!cart) return <p>You should log in to see your cart</p>;
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div className="cart-drop">
      <ul className="cart-drop__list">
        {cart.map((item) => (
          <li key={item._id} className="cart-drop__item">
            <img
              src={item.product.imageUrl}
              alt={item.product.title}
              className="cart-drop__img"
            />
            <div className="cart-drop__info">
              <h4 className="cart-drop__title">{item.product.title}</h4>
              <p className="cart-drop__category">{item.product.category}</p>
              <p className="cart-drop__price">${item.product.price}</p>
              <p className="cart-drop__quantity">
                Quantity: <Button type="plus">+</Button> {item.quantity}{" "}
                <Button type="minus">-</Button>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
