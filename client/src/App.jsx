import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { theme } from "./themes/themes";
import "./App.css";
import SubCategories from "./pages/SubCategories";
import SubsubCategories from "./pages/Sub-sub-Categories";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/categories" element={<SubCategories />} />
            <Route
              path="/categories/subCategory"
              element={<SubsubCategories />}
            />
            <Route
              path="/categories/subCategory/products"
              element={<ProductPage />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
