import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HeaderSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm, "serachterm");
  return (
    <>
      <form className="header-search-form" onSubmit={handleSearch}>
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
      <p>SASASA</p>
    </>
  );
};

export default HeaderSearch;
