import Highlighted from "../../UX/Highlighted";
import ProductCart from "../../UX/ProductCart";
import BtnsSellers from "./BestSellersItems/BtnsSellers";
import FilteredProducts from "./BestSellersItems/FilteredProducts";

const BestSellers = () => {
  return (
    <div className="bestSellers-container">
      <h2>Best Sellers</h2>
      <Highlighted>
        <BtnsSellers />
        <FilteredProducts />
      </Highlighted>
    </div>
  );
};

export default BestSellers;
