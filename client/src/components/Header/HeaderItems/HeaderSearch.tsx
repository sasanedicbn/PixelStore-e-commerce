import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGetProductsBySearchBarQuery } from "../../../store/slices/apiSlice";
import SearchBarDrop from "../../../UX/SearchBarDrop";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: filteredProducts, isLoading } =
    useGetProductsBySearchBarQuery(searchTerm);
  console.log(filteredProducts, "filtrirani produkti");

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
        {isLoading && <p>Loading...</p>}
        {filteredProducts?.length > 0 ? (
          <SearchBarDrop items={filteredProducts} />
        ) : (
          ""
        )}
      </form>
    </>
  );
};

export default HeaderSearch;
