import "./App.css";
import "./styles/main.scss";
import Home from "./pages/Home/HomeHelpers.tsx/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:id",
      element: <SingleProduct />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
