import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [visitors, setVisitors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const response = await axios.get("http://localhost:5001/visitors");
      setVisitors(response.data.sort((a, b) => new Date(b.checkInTime) - new Date(a.checkInTime)));
    } catch (error) {
      console.error("❌ Failed to load visitors:", error);
    }
  };

  const filteredVisitors = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Admin Dashboard
      </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search visitors..."
        className="w-full p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Visitor List */}
      <motion.div 
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredVisitors.map((visitor) => (
          <motion.div
            key={visitor._id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{visitor.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">Contact: {visitor.contact}</p>
            <p className="text-gray-600 dark:text-gray-400">Company: {visitor.company || "N/A"}</p>
            <p className="mt-2 px-3 py-1 rounded-full text-white text-sm bg-blue-500">
              {new Date(visitor.checkInTime).toLocaleString()}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdminDashboard;
