import Button from "./Button";

const DropDownUserData = ({
  item,
  type,
  getSingleProductHandler,
  updateCartItemHandler,
}) => {
  return (
    <li
      key={item._id}
      className="cart-drop__item"
      onClick={() => getSingleProductHandler(item.product._id)}
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
        {type === "cart" && (
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
              onClick={(e) => {
                e.stopPropagation();
                updateCartItemHandler(item.product._id, "decrement");
              }}
              type="minus"
            >
              -
            </Button>
          </p>
        )}
      </div>
    </li>
  );
};

export default DropDownUserData;
