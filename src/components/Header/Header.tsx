import HeaderActions from "./HeaderItems/HeaderActions";
import PixelStudioLogo from "./HeaderItems/HeaderLogo";
import HeaderSearch from "./HeaderItems/HeaderSearch";

const Header = () => {
  return (
    <header>
      <PixelStudioLogo />
      <HeaderSearch />
      <HeaderActions />
    </header>
  );
};
export default Header;
