import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSendProductToCartMutation } from "../store/slices/apiSlice";

const ProductCart = ({ products = [] }) => {
  const navigate = useNavigate();
  const [dataToSendHandler] = useSendProductToCartMutation();
  const getSinglePoductHandler = (id) => {
    navigate(`/products/${id}`);
  };
  const addProductToCartHandler = async (id) => {
    try {
      await dataToSendHandler(id).unwrap();
    } catch (error) {
      console.error("Failed to add product to cart:", error);
    }
  };

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-cart">
            <img
              className="product-img"
              src={product.imageUrl}
              alt={product.title}
              onClick={() => getSinglePoductHandler(product._id)}
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}</p>
            <Button onClick={() => addProductToCartHandler(product._id)}>
              Add to Cart
            </Button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductCart;
