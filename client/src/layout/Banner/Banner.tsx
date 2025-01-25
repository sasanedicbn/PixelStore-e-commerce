import BannerLaptops from "./BannerItems/BannerLapTops";
import BannerTvs from "./BannerItems/BannerTvs";

const Banner = () => {
  return (
    <div className="banner-container">
      <BannerLaptops />
      <BannerTvs />
    </div>
  );
};
export default Banner;
