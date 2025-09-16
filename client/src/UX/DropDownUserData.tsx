import Button from "./Button";

const DropDownUserData = ({
  item,
  type,
  getSingleProductHandler,
  updateCartItemHandler,
  quantity = 0,
}) => {
  return (
    <li
      key={item._id}
      className="cart-drop__item"
      onClick={() => getSingleProductHandler(item._id)}
    >
      <img src={item.imageUrl} alt={item.title} className="cart-drop__img" />
      <div className="cart-drop__info">
        <h4 className="cart-drop__title">{item.title}</h4>
        <p className="cart-drop__category">{item.category}</p>
        <p className="cart-drop__price">${item.price}</p>
        {type === "cart" && (
          <p className="cart-drop__quantity">
            Quantity:{" "}
            <Button
              type="plus"
              onClick={(e) => {
            {quantity}{" "}
            <Button
              onClick={(e) => {
                e.stopPropagation();
                updateCartItemHandler(item._id, "decrement");
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
