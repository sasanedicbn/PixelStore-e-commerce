import ReviewStars from "./ReviewStars";

const ProductDetails = ({ product }) => {
  console.log(product, "product deta");
  const staticStars = 5;
  return (
    <div className="product-details">
      <h1>{product.product.title}</h1>
      <div className="static-stars">
        {[...Array(staticStars)].map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
        <p> Be the first to review this product</p>
      </div>
      <p>${product.product.price}</p>
      <p>{product.product.details.available}</p>
      <p>{product.product.description}</p>
      <ReviewStars
        totalStars={5}
        onRatingChange={(rating) => console.log(rating)}
      />
    </div>
  );
};
export default ProductDetails;
