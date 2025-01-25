import NavBarActions from "./NavBarItems.tsx/NavBarActions";
import NavBarShipping from "./NavBarItems.tsx/NavBarShipping";
import NavBarSocial from "./NavBarItems.tsx/NavBarSocial";

const NavBar = () => {
  return (
    <nav>
      <NavBarShipping />
      <NavBarActions />
      <NavBarSocial />
    </nav>
  );
};

export default NavBar;
