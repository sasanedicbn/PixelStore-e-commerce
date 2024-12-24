import HeaderActions from "./HeaderItems/HeaderActions";
import HeaderLogo from "./HeaderItems/HeaderLogo";
import HeaderSearch from "./HeaderItems/HeaderSearch";

const Header = () => {
  return (
    <header>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderActions />
    </header>
  );
};
export default Header;
