import { createBrowserRouter } from "react-router-dom";
import Shop from "./src/Shop";
import ProductListPage from "./src/pages/ProductListPage/ProductListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
    errorElement: <Shop />,
  },
  {
    path: "/womens",
    element: <ProductListPage />,
  },
]);
