import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGetProductsBySearchBarQuery } from "../../../store/slices/apiSlice";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: filteredProducts, isLoading } = useGetProductsBySearchBarQuery(
    searchTerm,
    {
      skip: searchTerm.length < 2,
    }
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form className="header-search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="header-search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="header-search-btn">
          <FaSearch />
        </button>
      </form>

      {isLoading && <p>Loading...</p>}

      {filteredProducts?.length > 0 && (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default HeaderSearch;
