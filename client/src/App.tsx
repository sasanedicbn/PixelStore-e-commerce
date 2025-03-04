import "./App.css";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/HomeHelpers.tsx/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Layout from "./UX/Layout";
import SignIn from "./pages/NavActions/SignIn/SignIn";
import ContactUs from "./pages/NavActions/ContactUs/ContactUs";
import CreateAcc from "./pages/NavActions/CreateAcc/CreateAcc";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
        },
        {
          path: "/customer/signin",
          element: <SignIn />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
        {
          path: "createAccount",
          element: <CreateAcc />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
