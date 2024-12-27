import DropMenu from "../../../UX/DropMenu";
import Icon from "../../../UX/Icons";

const Products = () => {
  return (
    <div className="products">
      <span>
        <Icon name="burger" size="26" color="#e32726" />
        <p>Products</p>
      </span>
      <Icon name="down" color="#e32726" />
      <DropMenu />
    </div>
  );
};
export default Products;
