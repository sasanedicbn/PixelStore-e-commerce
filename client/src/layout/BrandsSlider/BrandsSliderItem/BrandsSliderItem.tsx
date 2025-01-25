const BrandsSliderItem = ({ src, alt }) => {
  return (
    <div className="brands-item">
      <img src={src} alt={alt} className="brands-img" />
    </div>
  );
};

export default BrandsSliderItem;
