import Highlighted from "../../UX/Highlighted";
import ProductCart from "../../UX/ProductCart";

const TopDeals = () => {
  return (
    <div className="bestSellers-container">
      <h2>Top Deals</h2>
      <Highlighted>
        <ProductCart />
      </Highlighted>
    </div>
  );
};
export default TopDeals;
