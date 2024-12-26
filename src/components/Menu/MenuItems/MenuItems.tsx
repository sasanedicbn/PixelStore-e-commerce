import Icon from "../../../UX/Icons";
import Products from "./Products";

const MenuItems = () => {
  return (
    <div>
      <Products />
      <ul>
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
