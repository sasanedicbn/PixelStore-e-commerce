import Button from "../../../UX/Button";
import Icon from "../../../UX/Icons";
import HeaderAction from "./HeaderActionsItems/HeaderAction";
import UserDrop from "./HeaderActionsItems/UserDrop";

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
        <UserDrop />
      </HeaderAction>

      <HeaderAction
        icon={
          <Button type="favourites">
            <Icon name="favourites" />
          </Button>
        }
      >
        <p>Contet za prikazati favourites</p>
      </HeaderAction>
      <HeaderAction
        icon={
          <Button type="cart">
            <Icon name="cart" />
          </Button>
        }
      >
        <p>Contet za prikazati iz cart</p>
      </HeaderAction>
    </div>
  );
};

export default HeaderActions;
