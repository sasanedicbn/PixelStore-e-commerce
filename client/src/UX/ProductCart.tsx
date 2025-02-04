import Button from "./Button";

const ProductCart = ({ products = [] }) => {
  const getSingleProductHandler = (id) => {};
  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-cart">
            <img
              className="product-img"
              src={product.imageUrl}
              alt={product.title}
              onClick={() => getSingleProductHandler(product._id)}
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
            <Button>Add to Cart</Button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductCart;
