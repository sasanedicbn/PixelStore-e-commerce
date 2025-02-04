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

    const promises = products.map(async (product) => {
      const formData = new FormData();
      formData.append("title", product.title);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("details", JSON.stringify(product.details));

      const imageResponse = await fetch(product.image);
      const blob = await imageResponse.blob();
      formData.append("image", blob, "image.jpg");

      const uploadResponse = await fetch(
        "http://localhost:8000/upload-products",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await uploadResponse.json();
      return data;
    });

    const results = await Promise.all(promises);
    console.log("Svi proizvodi!", results);
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
