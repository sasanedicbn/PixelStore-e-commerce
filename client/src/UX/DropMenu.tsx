import Icon from "./Icons";

const DropMenu = () => {
  const menuItems = [
    "Computers & Tablets",
    "TV & Home Theater",
    "Appliances",
    "Audio",
    "Home, Garage & Office",
    "Cameras",
    "Video Games",
    "Car Electronics & GPS",
  ];

  return (
    <div className="products-dropMenu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            {item}
            <Icon name="right" size="12" color="#423f3f" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
