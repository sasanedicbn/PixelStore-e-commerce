import Button from "./Button";

const ProductCart = () => {
  return (
    <div className="product-cart">
      <img
        className="product-img"
        src="https://via.placeholder.com/200"
        alt="product img"
      />
      <p className="product-title">Product Name</p>
      <p className="product-price">$19.99</p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductCart;
