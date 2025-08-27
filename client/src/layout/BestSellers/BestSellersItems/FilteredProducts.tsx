import { useSearchParams } from "react-router-dom";
import ProductCart from "../../../UX/ProductCart";
import { useGetProductsByCategoryQuery } from "../../../store/slices/apiSlice";

const FilteredProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByCategoryQuery(category);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {isError}</div>;

  return <ProductCart products={products.products} />;
};

export default FilteredProducts;
