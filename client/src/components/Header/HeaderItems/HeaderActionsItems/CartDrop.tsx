import { useNavigate } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetUserCartQuery,
  useUpdateCartMutation,
} from "../../../../store/slices/apiSlice";
import Button from "../../../../UX/Button";

const CartDrop = () => {
  const { data: cartData, isLoading } = useGetUserCartQuery();
  const [updateCartItem] = useUpdateCartMutation();
  const { data: product } = useGetProductByIdQuery();
  const navigate = useNavigate();

  const cart = cartData?.cart || [];

  if (isLoading) return <p>Loading...</p>;
  if (!cart) return <p>You should log in to see your cart</p>;
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const updateCartItemHandler = async (productId, type) => {
    try {
      await updateCartItem({ productId, type }).unwrap();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };
  const getSinglePoductHandler = async (id) => {
    try {
      navigate(`/products/${id}`);
    } catch (error) {
      console.error("Failed to navigate to product:", error);
    }
  };

  return (
    <div className="cart-drop">
      <ul className="cart-drop__list">
        {cart.map((item) => (
          <li
            key={item._id}
            className="cart-drop__item"
            onClick={(e) => {
              e.stopPropagation();
              getSinglePoductHandler(item._id);
            }}
          >
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
                Quantity:{" "}
                <Button
                  type="plus"
                  onClick={(e) => {
                    e.stopPropagation();
                    updateCartItemHandler(item.product._id, "increment");
                  }}
                >
                  +
                </Button>{" "}
                {item.quantity}{" "}
                <Button
                  onClick={() =>
                    updateCartItemHandler(item.product._id, "decrement")
                  }
                  type="minus"
                >
                  -
                </Button>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
