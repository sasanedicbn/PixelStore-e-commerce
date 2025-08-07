import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";
import HeaderAction from "./HeaderActionsItems/HeaderAction";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <Button type="user">
        <HeaderAction
          icon={((<Icon name="user" />), (<p>Content koji treba prikazati</p>))}
        />
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
