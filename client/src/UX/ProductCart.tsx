import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import {
  setError,
  setLoading,
  setProductsByCategory,
} from "../store/slices/bestSellerReducer";

const ProductCart = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Uzmi proizvode i stanje iz Redux store-a
  const products = useSelector(
    (state) => state.products.productsByCategory[category] || []
  );
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    const fetchProducts = async () => {
      // Proveri da li proizvodi već postoje u Redux store-u
      if (products.length > 0) {
        return; // Nemoj ponovo učitavati ako su već učitani
      }

      dispatch(setLoading(true)); // Postavi loading na true

      try {
        const url = category
          ? `http://localhost:8000/products?category=${category}`
          : "http://localhost:8000/products";

        const response = await fetch(url);
        const data = await response.json();

        // Ažuriraj Redux store sa novim proizvodima
        dispatch(setProductsByCategory({ category, products: data.products }));
      } catch (error) {
        dispatch(setError(error.message)); // Postavi grešku ako dođe do problema
      } finally {
        dispatch(setLoading(false)); // Postavi loading na false
      }
    };

    fetchProducts();
  }, [dispatch, category, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-cart">
            <img
              className="product-img"
              src={product.imageUrl}
              alt={product.title}
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
