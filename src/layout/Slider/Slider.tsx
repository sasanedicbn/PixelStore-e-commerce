import Button from "../../UX/Button";
import Icon from "../../UX/Icons";
import FirstSliderItem from "./SlidersItems/FirstSliderItem";
import SecondSliderItem from "./SlidersItems/SecondSliderItem";

const Slider = () => {
  return (
    <div className="slider">
      <Button type="sliderBtnLeft">
        <Icon name="sliderLeft" size="24" color="red" />
      </Button>
      {/* <FirstSliderItem /> */}
      <SecondSliderItem />
      <Button type="sliderBtnRight">
        <Icon name="sliderRight" size="24" color="red" />
      </Button>
    </div>
  );
};

export default Slider;
