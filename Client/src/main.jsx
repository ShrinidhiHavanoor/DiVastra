import "@fontsource/cinzel";
import "@fontsource/marcellus";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Shop from "./Shop.jsx";
import "react-multi-carousel/lib/styles.css";
import { RouterProvider, Routes } from "react-router-dom";
import { router } from "../routes.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>
);
