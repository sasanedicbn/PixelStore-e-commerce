import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";
import HeaderActionUser from "./HeaderActionsItems/HeaderActionUser";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <Button type="user">
        <HeaderActionUser />
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
