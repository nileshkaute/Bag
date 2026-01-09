import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./component/home/Navbar";

const App = () => {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only if NOT on landing page */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
