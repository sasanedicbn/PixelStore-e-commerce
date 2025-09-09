import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useSendItemtoFavouritesMutation,
} from "../../store/slices/apiSlice";
import ProductDetails from "./SingleProductItems/ProductDetails";
import ProductInfo from "./SingleProductItems/ProductInfo";

const SingleProduct = () => {
  const { id } = useParams();
  const [sendItemtoFavourites] = useSendItemtoFavouritesMutation();

  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching product</p>;
  console.log(product, "iz singla producta");

  return (
    <>
      <div className="single-product">
        <img src={product.product.imageUrl} alt={product.title} />
        <ProductDetails product={product} />
      </div>
      <ProductInfo product={product} />
    </>
  );
};

export default SingleProduct;
