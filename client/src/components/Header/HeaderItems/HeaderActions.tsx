import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";
// import CartDrop from "./HeaderActionsItems/CartDrop";
import FavouritesDrop from "./HeaderActionsItems/FavouritesDrop";
import HeaderAction from "./HeaderActionsItems/HeaderAction";
// import UserDrop from "./HeaderActionsItems/UserDrop";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <HeaderAction
        icon={
          <Button type="user">
            <Icon name="user" />
          </Button>
        }
      >
        {/* <p>Content koji treba prikazati</p> */}
        {/* <UserDrop /> */}
      </HeaderAction>

      <HeaderAction
        icon={
          <Button type="favourites">
            <Icon name="favourites" />
          </Button>
        }
      >
        <FavouritesDrop />
      </HeaderAction>
      <HeaderAction
        icon={
          <Button type="cart">
            <Icon name="cart" />
          </Button>
        }
      >
        {/* <CartDrop /> */}
      </HeaderAction>
    </div>
  );
};

export default HeaderActions;
