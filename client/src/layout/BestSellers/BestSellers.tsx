import Highlighted from "../../UX/Highlighted";
import ProductCart from "../../UX/ProductCart";
import AllProducts from "./BestSellersItems/AllProducts";
import BtnsSellers from "./BestSellersItems/BtnsSellers";
import FilteredProducts from "./BestSellersItems/FilteredProducts";

const BestSellers = () => {
  return (
    <div className="bestSellers-container">
      <h2>Best Sellers</h2>
      <Highlighted>
        <BtnsSellers />
        <FilteredProducts />
        {/* <AllProducts /> */}
      </Highlighted>
    </div>
  );
};

export default BestSellers;
//1. HAJDE PRVO DA VIDIM DA OPTIMIZUJEM OVO TAMO GDJE HVATA DA NE IDE SA VOIM USEEFFECTOMI ONOLINKO DEPENDECIES DA IMA
//2. DA VIDIM DA HVATAM PREKO ID SINGLE PRODUCT
