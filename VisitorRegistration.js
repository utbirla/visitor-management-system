import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import QRCodeGenerator from "./QRCodeGenerator";

const VisitorRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    company: "",
    purpose: "",
    host: "",
  });

  const [visitorId, setVisitorId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5001/register", formData);
      setVisitorId(response.data.visitor._id);
    } catch (error) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Visitor Registration
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="text"
            name="contact"
            placeholder="Contact Number"
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            required
            whileFocus={{ scale: 1.05 }}
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>
        </form>
        {visitorId && <QRCodeGenerator visitorId={visitorId} />}
      </motion.div>
    </motion.div>
  );
};

export default VisitorRegistration;
