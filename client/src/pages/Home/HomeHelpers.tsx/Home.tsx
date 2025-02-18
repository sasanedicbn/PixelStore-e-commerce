import Banner from "../../../layout/Banner/Banner";
import BestSellers from "../../../layout/BestSellers/BestSellers";
import BrandsSlider from "../../../layout/BrandsSlider/BrandsSlider";
import Newsletter from "../../../layout/Newsletter/Newsletter";
import Services from "../../../layout/Services/Services";
import Slider from "../../../layout/Slider/Slider";
import TopCategories from "../../../layout/TopCategories/TopCategories";
import TopDeals from "../../../layout/TopDeals/TopDeals";

const Home = () => {
  return (
    <div>
      <Slider />
      <BestSellers />
      <TopDeals />
      <Banner />
      <TopCategories />
      <BrandsSlider />
      <Services />
      <Newsletter />
    </div>
  );
};
export default Home;
