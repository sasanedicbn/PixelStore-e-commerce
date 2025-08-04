const SearchBarDrop = ({ items }) => {
  console.log(items, "items koji primam");
  return (
    <div>
      <ul>
        {items.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarDrop;
