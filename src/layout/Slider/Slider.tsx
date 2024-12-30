import Button from "../../UX/Button";
import Icon from "../../UX/Icons";
import FirstSliderItem from "./SlidersItems/FirstSliderItem";
import SecondSliderItem from "./SlidersItems/SecondSliderItem";

const Slider = () => {
  return (
    <div className="slider">
      <Button type="user">
        <Icon name="sliderLeft" size="24" color="black" />
      </Button>
      {/* <FirstSliderItem /> */}
      <SecondSliderItem />
      <Button type="user">
        <Icon name="sliderRight" size="24" color="black" />
      </Button>
    </div>
  );
};

export default Slider;
