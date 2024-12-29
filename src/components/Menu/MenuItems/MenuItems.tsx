import React, { useRef, useState } from "react";
import Icon from "../../../UX/Icons";
import MenuItemsDrop from "../../../UX/MenuItemsDrop";
import Products from "./Products";

const MenuItems = () => {
  const [activeMenu, setActiveMenu] = useState(null);

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

  const itemsForServices = [
    {
      title: "SERVICES",
      content: ["Consulting", "Support", "Custom Solutions"],
    },
    { title: "Additional Services", content: ["Training", "Installation"] },
    { isImage: true, content: "https://via.placeholder.com/150" },
  ];

  const itemsForBrands = [
    { title: "BRANDS", content: ["Brand A", "Brand B", "Brand C"] },
    { title: "Popular Brands", content: ["Brand D", "Brand E"] },
    { isImage: true, content: "https://via.placeholder.com/150" },
  ];

  const menuData = {
    Deals: itemsForDeals,
    Services: itemsForServices,
    Brands: itemsForBrands,
  };

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <div className="menuItems-container">
      <Products />
      <ul className="menu-ul">
        {Object.keys(menuData).map((menuName) => (
          <li
            key={menuName}
            onMouseEnter={() => handleMouseEnter(menuName)}
            onMouseLeave={handleMouseLeave}
            className="menu-item"
          >
            {menuName}{" "}
            <span>
              <Icon name="down" />
            </span>
            {activeMenu === menuName && (
              <MenuItemsDrop items={menuData[menuName]} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
