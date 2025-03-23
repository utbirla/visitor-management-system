import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          VMS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Admin", "Register", "QR Scanner"].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition">
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 dark:text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-2">
          {["Home", "Admin", "Register", "QR Scanner"].map((item, index) => (
            <Link 
              key={index} 
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} 
              className="block text-gray-600 dark:text-white p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
