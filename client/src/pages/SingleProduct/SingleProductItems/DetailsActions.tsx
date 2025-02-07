import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";

const DetailsActions = () => {
  return (
    <div className="detailsActions">
      <div className="quantity">
        <Button type="minus"> - </Button>
        <input type="text" name="quantity" id="quantity" value={1} />
        <Button type="plus"> + </Button>
      </div>
      <Button type="addToCart">
        <Icon name="cart" />
        <span>ADD TO CART</span>
      </Button>
    </div>
  );
};
export default DetailsActions;
