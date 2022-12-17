import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { theme } from "./themes/themes";
import "./App.css";
import SubCategories from "./pages/SubCategories";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/categories" element={<SubCategories />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
