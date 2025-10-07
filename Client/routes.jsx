import { createBrowserRouter } from "react-router-dom";
import Shop from "./src/Shop";
import ErrorPage from "./src/pages/ErrorPage";
import ProductListPage from "./src/pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./src/pages/ShopApplicationWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/womens",
        element: <ProductListPage />,
      },
    ],
    errorElement:<ErrorPage/>
  },
]);
