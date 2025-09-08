import {
  useUpdateCartMutation,
  useGetUserCartQuery,
} from "../../../store/slices/apiSlice";
import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";

const DetailsActions = ({ id }) => {
  const { data: cartData } = useGetUserCartQuery();
  const [updateCartItem] = useUpdateCartMutation();

  const cart = cartData?.cart || [];
  const cartItem = cart.find((item) => item.product._id === id);
  const quantity = cartItem ? cartItem.quantity : 1;

  const updateCartItemHandler = async (productId, type) => {
    try {
      await updateCartItem({ productId, type }).unwrap();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  return (
    <div className="detailsActions">
      <div className="quantity">
        <Button
          type="minus"
          onClick={() => updateCartItemHandler(id, "decrement")}
        >
          -
        </Button>
        <input
          type="text"
          name="quantity"
          id="quantity"
          value={quantity}
          readOnly
        />
        <Button
          type="plus"
          onClick={() => updateCartItemHandler(id, "increment")}
        >
          +
        </Button>
      </div>
      <Button type="addToCart">
        <Icon name="cart" />
        <span>ADD TO CART</span>
      </Button>
      <Button type="secondCart">
        <Icon name="favourites" />
      </Button>
    </div>
  );
};

export default DetailsActions;
