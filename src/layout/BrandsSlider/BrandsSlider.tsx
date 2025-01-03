import BrandsSliderItem from "./BrandsSliderItem/BrandsSliderItem";

const BrandsSlider = () => {
  const brands = [
    { src: "../public/assets/brands/Acer.jpg", alt: "Acer brand" },
    { src: "../public/assets/brands/Asus.jpg", alt: "Asus brand" },
    { src: "../public/assets/brands/Lenovo.jpg", alt: "Lenovo brand" },
    { src: "../public/assets/brands/Microsoft.jpg", alt: "Microsoft brand" },
    { src: "../public/assets/brands/Sigma.jpg", alt: "Sigma brand" },
  ];

  return (
    <div className="brands-slider-container">
      <h2 className="brands-slider-title">Brands We Love</h2>
      <div className="brands-slider-items">
        {brands.map((brand, index) => (
          <BrandsSliderItem key={index} src={brand.src} alt={brand.alt} />
        ))}
      </div>
    </div>
  );
};

export default BrandsSlider;
