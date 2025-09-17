import { useNavigate } from "react-router-dom";
import {
  useGetUserCartQuery,
  useUpdateCartMutation,
} from "../../../../store/slices/apiSlice";
import DropDownUserData from "../../../../UX/DropDownUserData";

const CartDrop = () => {
  const { data: cartData, isLoading } = useGetUserCartQuery();
  const [updateCartItem] = useUpdateCartMutation();
  const navigate = useNavigate();

  const cart = cartData?.cart || [];

  if (isLoading) return <p>Loading...</p>;
  if (!cart) return <p>You should log in to see your cart</p>;
  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const updateCartItemHandler = async (productId: string, type: string) => {
    try {
      await updateCartItem({ productId, type }).unwrap();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const getSingleProductHandler = (id: string) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="cart-drop">
      <ul className="cart-drop__list">
        {cart.map((item) => (
          <DropDownUserData
            item={item.product}
            quantity={item.quantity}
            type="cart"
            getSingleProductHandler={getSingleProductHandler}
            updateCartItemHandler={updateCartItemHandler}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartDrop;
