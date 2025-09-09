import {
  useUpdateCartMutation,
  useGetUserCartQuery,
  useSendProductToCartMutation,
  useSendItemtoFavouritesMutation,
} from "../../../store/slices/apiSlice";
import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";

const DetailsActions = ({ id }) => {
  console.log(id, "iz propsa");
  const { data: cartData } = useGetUserCartQuery();
  const [updateCartItem] = useUpdateCartMutation();
  const [dataToSendHandler] = useSendProductToCartMutation();
  const [sendItemtoFavourites] = useSendItemtoFavouritesMutation();

  const addProductToCartHandler = async (id) => {
    try {
      await dataToSendHandler(id).unwrap();
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  const addItemToFavouritesHandler = async (id) => {
    try {
      await sendItemtoFavourites(id).unwrap();
    } catch (error) {
      console.error("Failed to add product to favourites:", error);
    }
  };

  const cart = cartData?.cart || [];
  const cartItem = cart.find((item) => item.product._id === id);
  console.log(cartItem, "iz cartItems da li je pronadjen");
  const quantity = cartItem ? cartItem.quantity : 0;

  const updateCartItemHandler = async (productId, type) => {
    try {
      if (!cartItem) {
        // toast.error("You should log in to add items to cart");
        return;
      }
      await updateCartItem({ productId, type }).unwrap();
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  return (
    <div className="detailsActions">
      {cartItem ? (
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
      ) : (
        <Button type="addToCart" onClick={() => addProductToCartHandler(id)}>
          <Icon name="cart" />
          <span>ADD TO CART</span>
        </Button>
      )}

      <Button type="secondCart" onClick={() => addItemToFavouritesHandler(id)}>
        <Icon name="favourites" />
      </Button>
    </div>
  );
};

export default DetailsActions;
