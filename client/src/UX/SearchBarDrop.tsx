const SearchBarDrop = ({ items }) => {
  console.log(items, "items koji primam");
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
