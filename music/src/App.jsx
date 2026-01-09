import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./component/home/Navbar";
import Admin from "./pages/admin/Admin";
import AddProduct from "./pages/admin/AddProduct";


const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if NOT on landing page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
};

export default App;
