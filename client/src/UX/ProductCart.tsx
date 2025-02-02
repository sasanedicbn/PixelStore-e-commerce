import { useEffect, useState } from "react";
import Button from "./Button";
import { useSearchParams } from "react-router-dom";

const ProductCart = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  console.log(products, "products");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const category = searchParams.get("category");
        console.log("novi", category);
        const url = category
          ? `http://localhost:8000/products?category=${category}`
          : "http://localhost:8000/products";

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
      }
    };

    fetchProducts();
  }, [searchParams]);
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
