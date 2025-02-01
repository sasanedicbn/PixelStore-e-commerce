import { useSearchParams } from "react-router-dom";
import Highlighted from "../../UX/Highlighted";
import ProductCart from "../../UX/ProductCart";
import BtnsSellers from "./BestSellersItems/BtnsSellers";

const BestSellers = () => {
  return (
    <div className="bestSellers-container">
      <h2>Best Sellers</h2>
      <Highlighted>
        <BtnsSellers />
        <ProductCart />
      </Highlighted>
    </div>
  );
};

export default BestSellers;
