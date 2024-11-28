import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import { StoreContext } from "./context/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContext>
      <App />
    </StoreContext>
  </BrowserRouter>
);
