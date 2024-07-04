import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import IndiaPage from "./pages/IndiaPage";
import CompanyPage from "./pages/CompanyPage";
import LatestNewsPage from "./pages/LatestNewsPage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/india" element={<IndiaPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/latest-news" element={<LatestNewsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
