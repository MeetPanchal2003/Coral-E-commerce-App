import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import LoginPage from "./pages/Auth/Log_In/LoginPage";
import Register from "./pages/Auth/Register/Register";
import Cart from "./pages/Cart";
import DisplayProduct from "./pages/DisplayProduct";
import { DataFile } from "./Data/DataFile";
import AllProduct from "./pages/AllProduct";
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

const App = () => {
  return (
    <DataFile>
      <div>
        <Router>
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" exact element={<LoginPage />} />
              <Route path="/register" exact element={<Register />} />
              <Route path="/cart" exact element={<Cart />} />
              <Route path="/allproducts" exact element={<AllProduct />} />
              <Route
                path="/productdetails"
                exact
                element={<DisplayProduct />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </DataFile>
  );
};

export default App;
