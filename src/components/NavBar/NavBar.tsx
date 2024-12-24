import NavBarActions from "./NavBarItems.tsx/NavBarActions";
import NavBarShipping from "./NavBarItems.tsx/NavBarShipping";
import NavBarSocial from "./NavBarItems.tsx/NavBarSocial";

const NavBar = () => {
  return (
    <div>
      <NavBarShipping />
      <NavBarActions />
      <NavBarSocial />
    </div>
  );
};

export default NavBar;
