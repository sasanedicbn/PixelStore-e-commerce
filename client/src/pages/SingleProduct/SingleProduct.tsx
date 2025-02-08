import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/slices/apiSlice";
import ProductDetails from "./SingleProductItems/ProductDetails";
import ProductInfo from "./SingleProductItems/ProductInfo";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching product</p>;

  return (
    <div className="single-product">
      <img src={product.product.imageUrl} alt={product.title} />
      <ProductDetails product={product} />
      <ProductInfo />
    </div>
  );
};

export default SingleProduct;
