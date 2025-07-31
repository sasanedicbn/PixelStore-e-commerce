const SearchBarDrop = (items) => {
  return (
    <div>
      {items.map((item) => {
        <p>{item.title}</p>;
      })}
    </div>
  );
};

export default SearchBarDrop;
