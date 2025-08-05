import { useNavigate } from "react-router-dom";
import { useGetProductByIdQuery } from "../store/slices/apiSlice";

const SearchBarDrop = ({ items }) => {
  // const productId = items._id;
  // const {
  //   data: product,
  //   isLoading,
  //   isError,
  // } = useGetProductByIdQuery(productId);

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error fetching product</p>;

  // const navigateToProductHandler = () => {
  //   const navigate = useNavigate();
  //   navigate(`/products/${productId}`);
  // };
  // console.log("ovo treba da bude id ili product", product);
  return (
    <div className="searcBarDrop">
      <ul>
        {items.map((product) => (
          <div className="searchBarDrop-product-wrapper">
            <div>
              <img
                src={product.imageUrl}
                alt={"product image"}
                className="searchBarDrop-img"
                // onClick={() => navigateToProductHandler()}
              />
              <li key={product._id}>{product.title}</li>
            </div>
            <p>{product.price + "€"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarDrop;
