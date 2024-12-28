import React from "react";
import "./MenuItemsDrop.scss";

const MenuItemsDrop = () => {
  return (
    <div className="menu-container">
      <button className="menu-button">Deals Menu</button>
      <div className="menu-dropdown">
        <div className="menu-column">
          <h3>DEALS</h3>
          <ul>
            <li>Top Deals</li>
            <li>Weekly Deals</li>
            <li>Deal of the Day</li>
            <li>Fall Savings</li>
          </ul>
        </div>
        <div className="menu-column">
          <h3>Gift Guides</h3>
          <ul>
            <li>Gift Ideas New</li>
            <li>Gifts by Price</li>
            <li>Gifts by Recipient</li>
            <li>Gift Lists</li>
          </ul>
        </div>
        <div className="menu-column image-column">
          <img src="https://via.placeholder.com/150" alt="Deals" />
        </div>
      </div>
    </div>
  );
};

export default MenuItemsDrop;
