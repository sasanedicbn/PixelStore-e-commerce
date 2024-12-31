import Button from "./Button";

const ProductCart = () => {
  return (
    <div className="product-cart">
      <img src="./" alt="product img" />
      <p className="product-title"></p>
      <p className="product-price"></p>
      <Button>Add to Cart</Button>
    </div>
  );
};

export default ProductCart;
