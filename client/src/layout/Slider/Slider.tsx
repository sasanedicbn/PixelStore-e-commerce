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

  const sendData = async () => {
    const response = await fetch("./public/assets/products.json");
    const products = await response.json();
    console.log("products", products);
    const payload = new FormData();
    console.log(payload, "pejload");
    const promises = products.map(async (product, index) => {
      console.log("product unutra", product);
      payload.append(`title_${index}`, product.title);
      payload.append(`price_${index}`, product.price);
      payload.append(`category_${index}`, product.category);

      try {
        const imageResponse = await fetch(product.image);
        const blob = await imageResponse.blob();
        payload.append(`image_${index}`, blob, `image_${index}.jpg`);
      } catch (error) {
        console.error(`Error loading image ${product.image}:`, error);
      }
    });
    const da = await Promise.all(promises);

    console.log("final promises", da);
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
      <button onClick={() => sendData()}>SEND DATA TO BACKEND</button>
    </div>
  );
};

export default Slider;
