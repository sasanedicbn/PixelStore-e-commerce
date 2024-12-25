import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <Button type="user">
        <Icon name="user" />
      </Button>
      <Button type="favourites">
        <Icon name="favourites" />
      </Button>
      <Button type="cart">
        <Icon name="cart" />
      </Button>
    </div>
  );
};

export default HeaderActions;
