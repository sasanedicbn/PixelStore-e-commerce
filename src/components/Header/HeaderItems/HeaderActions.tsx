import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const HeaderActions = () => {
  return (
    <div className="header-actions">
      <button className="header-action-btn">
        <FaUser />
      </button>
      <button className="header-action-btn">
        <FaHeart />
      </button>
      <button className="header-action-btn">
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default HeaderActions;
