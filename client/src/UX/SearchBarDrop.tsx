const SearchBarDrop = ({ items }) => {
  console.log(items, "items koji primam");
  return (
    <div className="searcBarDrop">
      <ul>
        {items.map((product) => (
          <div className="searchBarDrop-product-wrapper">
            <img
              src={product.imageUrl}
              alt={"product image"}
              className="searchBarDrop-img"
            />
            <li key={product._id}>{product.title}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarDrop;
