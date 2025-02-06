import ReviewStars from "./ReviewStars";

const ProductDetails = ({ product }) => {
  console.log(product, "product deta");
  const staticStars = 5;
  return (
    <div className="product-details">
      <h1>{product.product.title} - M1 chip (Latest model)</h1>
      <div className="static-stars">
        {[...Array(staticStars)].map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
        <p> Be the first to review this product</p>
      </div>
      <p className="price">${product.product.price}</p>
      <p className="available">
        {" "}
        AVAILABILITY:{" "}
        <span>{product.product.details.available.toUpperCase()}</span>
      </p>
      <p className="mpn">
        {" "}
        MPN: <span>MGN63LL/A</span>
      </p>
      <p>{product.product.description}</p>
      {/* <ReviewStars
        totalStars={5}
        onRatingChange={(rating) => console.log(rating)}
      /> */}
      <p>SASA</p>
    </div>
  );
};
export default ProductDetails;
