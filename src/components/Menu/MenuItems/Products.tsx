import { useRef, useState } from "react";
import DropMenu from "../../../UX/DropMenu";
import Icon from "../../../UX/Icons";

const Products = () => {
  const productRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (productRef.current) {
      productRef.current.style.backgroundColor = "#e32726";
    }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (productRef.current) {
      productRef.current.style.backgroundColor = "white";
    }
  };

  return (
    <div
      className="products"
      ref={productRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>
        <Icon name="burger" size="26" color={isHovered ? "white" : "#e32726"} />
        <p className={isHovered ? "white" : "red"}>Products</p>
      </span>
      <Icon name="down" color={isHovered ? "white" : "#e32726"} />
      {isHovered && <DropMenu />}
    </div>
  );
};

export default Products;
