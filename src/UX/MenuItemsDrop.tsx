import { useRef } from "react";

const MenuItemsDrop = ({ items }) => {
  const dropdownRef = useRef(null);

  return (
    <div className="menu-container" ref={dropdownRef}>
      <div className="menu-dropdown">
        {items.map((column, index) => (
          <div
            key={index}
            className={`menu-column ${column.isImage ? "image-column" : ""}`}
          >
            {column.isImage ? (
              <img src={column.content} alt="Menu Visual" />
            ) : (
              <>
                <h3>{column.title}</h3>
                <ul>
                  {column.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemsDrop;
