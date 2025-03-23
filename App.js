import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import VisitorRegistration from "./VisitorRegistration";
import QRScanner from "./QRScanner";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen transition duration-500 bg-gray-100 dark:bg-gray-900">
        {/* Navigation Bar */}
        <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">VMS</h1>
          <div className="space-x-4">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link>
            <Link to="/admin" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Admin</Link>
            <Link to="/visitor-registration" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Register</Link>
            <Link to="/qr-scanner" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">QR Scanner</Link>
          </div>
          <button
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/visitor-registration" element={<VisitorRegistration />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
