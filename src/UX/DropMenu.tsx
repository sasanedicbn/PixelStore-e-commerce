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
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropMenu;
