import { useUpdateCartMutation } from "../../../store/slices/apiSlice";
import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";

const DetailsActions = ({ id }) => {
  console.log(id, "iz details actions");
  const [updateCartItem] = useUpdateCartMutation();
  const updateCartItemHandler = async (productId, type) => {
    console.log(productId, type, "iz details actions");
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
          onClick={() => {
            updateCartItemHandler(id, "decrement");
          }}
        >
          {" "}
          -{" "}
        </Button>
        <input type="text" name="quantity" id="quantity" value={1} />
        <Button
          type="plus"
          onClick={() => {
            updateCartItemHandler(id, "increment");
          }}
        >
          {" "}
          +{" "}
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
