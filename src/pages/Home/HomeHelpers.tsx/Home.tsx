import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import NavBar from "../../../components/NavBar/NavBar";
import BestSellers from "../../../layout/BestSellers/BestSellers";
import Slider from "../../../layout/Slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Menu />
      <Slider />
      <BestSellers />
    </div>
  );
};
export default Home;
