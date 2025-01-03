const BrandsSliderItem = ({ src, alt }) => {
  return (
    <div className="brands-item">
      <div className="brands-imgs">
        <img src={src} alt={alt} className="brands-img" />
      </div>
    </div>
  );
};

export default BrandsSliderItem;
