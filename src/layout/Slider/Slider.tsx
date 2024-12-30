import { useState } from "react";
import Button from "../../UX/Button";
import Icon from "../../UX/Icons";
import FirstSliderItem from "./SlidersItems/FirstSliderItem";
import SecondSliderItem from "./SlidersItems/SecondSliderItem";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [<FirstSliderItem />, <SecondSliderItem />];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <Button type="sliderBtnLeft" onClick={prevSlide}>
        <Icon name="sliderLeft" size="24" color="red" />
      </Button>
      <div className="slider-content">{slides[currentSlide]}</div>
      <Button type="sliderBtnRight" onClick={nextSlide}>
        <Icon name="sliderRight" size="24" color="red" />
      </Button>
    </div>
  );
};

export default Slider;
