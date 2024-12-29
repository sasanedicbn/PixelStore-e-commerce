import { useRef } from "react";
import Icon from "../../../UX/Icons";
import MenuItemsDrop from "../../../UX/MenuItemsDrop";
import Products from "./Products";

const MenuItems = () => {
  const refDeals = useRef(null);

  const itemsForDeals = [
    {
      title: "DEALS",
      content: ["Top Deals", "Weekly Deals", "Deal of the Day", "Fall Savings"],
    },
    {
      title: "Gift Guides",
      content: [
        "Gift Ideas New",
        "Gifts by Price",
        "Gifts by Recipient",
        "Gift Lists",
      ],
    },
    { isImage: true, content: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="menuItems-container">
      <Products />
      <ul className="menu-ul">
        <li>
          Deals{" "}
          <span>
            <Icon name="down" />
          </span>
          <MenuItemsDrop ref={refDeals} items={itemsForDeals} />
        </li>
        <li>
          Services{" "}
          <span>
            <Icon name="down" />
          </span>
          <MenuItemsDrop items={[]} />
        </li>
        <li>
          Brands{" "}
          <span>
            <Icon name="down" />
          </span>
          <MenuItemsDrop items={[]} />
        </li>
      </ul>
    </div>
  );
};

export default MenuItems;
