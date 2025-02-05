import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Footer from "../layout/Footer.tsx/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
