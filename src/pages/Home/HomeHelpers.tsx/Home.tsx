import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import NavBar from "../../../components/NavBar/NavBar";
import Banner from "../../../layout/Banner/Banner";
import BestSellers from "../../../layout/BestSellers/BestSellers";
import Slider from "../../../layout/Slider/Slider";
import TopDeals from "../../../layout/TopDeals/TopDeals";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Menu />
      <Slider />
      <BestSellers />
      <TopDeals />
      <Banner />
    </div>
  );
};
export default Home;
