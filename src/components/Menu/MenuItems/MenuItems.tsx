import Icon from "../../../UX/Icons";
import Products from "./Products";

const MenuItems = () => {
  return (
    <div className="menuItems-container">
      <Products />
      <ul className="menu-ul">
        <li>
          Deals{" "}
          <span>
            <Icon name="down" />
          </span>
        </li>
        <li>
          Services{" "}
          <span>
            <Icon name="down" />
          </span>
        </li>
        <li>
          Brands{" "}
          <span>
            <Icon name="down" />
          </span>
        </li>
      </ul>
    </div>
  );
};
export default MenuItems;
