import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-30" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?office,people')" }}>
      </div>

      {/* Hero Text */}
      <motion.h1 
        className="text-5xl font-bold text-gray-800 dark:text-white relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Visitor Management System
      </motion.h1>

      <motion.p 
        className="text-gray-600 dark:text-gray-300 mt-3 text-lg relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Secure & efficient visitor check-ins with QR verification.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        className="mt-6 flex space-x-4 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/admin">
          <motion.button 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Admin Dashboard
          </motion.button>
        </Link>

        <Link to="/visitor-registration">
          <motion.button 
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Register Visitor
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
