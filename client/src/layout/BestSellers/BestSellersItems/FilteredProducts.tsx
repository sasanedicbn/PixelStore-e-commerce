import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import ProductCart from "../../../UX/ProductCart";
import {
  setError,
  setLoading,
  setProductsByCategory,
} from "../../../store/slices/bestSellerReducer";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const products = useSelector(
    (state) => state.products.productsByCategory[category] || []
  );
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    const fetchProducts = async () => {
      if (products.length > 0) return;

      dispatch(setLoading(true));

      try {
        const url = `http://localhost:8000/products?category=${category}`;
        const response = await fetch(url);
        const data = await response.json();

        dispatch(setProductsByCategory({ category, products: data.products }));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch, category, products]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <ProductCart products={products} />;
};

export default FilteredProducts;
