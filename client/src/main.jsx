import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopProvider from "./context/contextAPI";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>
);
