import "./App.css";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/HomeHelpers.tsx/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Layout from "./UX/Layout";
import ContactUs from "./pages/NavActions/ContactUs/ContactUs";
import CreateAcc from "./pages/NavActions/CreateAcc/CreateAcc";
import SignIn from "./pages/NavActions/SignIn/SignIn";
import { useGetUserQuery } from "./store/slices/apiSlice";

function App() {
  const { data: user } = useGetUserQuery();
  console.log(user, "iz App.tsx");

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
