import Highlighted from "../../UX/Highlighted";
import BtnsSellers from "./BestSellersItems/BtnsSellers";

const BestSellers = () => {
  return (
    <div className="bestSellers-container">
      <h2>Best Sellers</h2>
      <Highlighted>
        <BtnsSellers />
      </Highlighted>
    </div>
  );
};

export default BestSellers;
