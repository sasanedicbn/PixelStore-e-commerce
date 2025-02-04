import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/slices/apiSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching product</p>;

  return (
    <div className="single-product">
      <img src={product.imageUrl} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.details?.description}</p>
    </div>
  );
};

export default SingleProduct;
