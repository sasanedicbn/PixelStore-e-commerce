import { Link } from "react-router-dom";

const NavBarActions = () => {
  return (
    <div className="navBarActions">
      <ul className="navBar-items">
        <li>Call us at +38766992321</li>
        <Link to="/customer/signin">Sign in</Link>
        <Link to="contact">Contact us</Link>
        <Link to="createAccount">Create An Account</Link>
      </ul>
    </div>
  );
};

export default NavBarActions;
