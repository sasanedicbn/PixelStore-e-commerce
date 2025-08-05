import { useNavigate } from "react-router-dom";

const SearchBarDrop = ({ items }) => {
  const navigate = useNavigate();

  const navigateToProductHandler = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="searcBarDrop">
      <ul>
        {items.map((product) => (
          <div className="searchBarDrop-product-wrapper" key={product._id}>
            <div onClick={() => navigateToProductHandler(product._id)}>
              <img
                src={product.imageUrl}
                alt="product image"
                className="searchBarDrop-img"
              />
              <li>{product.title}</li>
            </div>
            <p>{product.price + "€"}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarDrop;
