import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../store/slices/apiSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  console.log(product.product);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching product</p>;

  return (
    <div className="single-product">
      <img src={product.product.imageUrl} alt={product.title} />
      <h2>{product.product.title}</h2>
      <p>${product.product.price}</p>
      <p>{product.product.description}</p>
    </div>
  );
};

export default SingleProduct;
