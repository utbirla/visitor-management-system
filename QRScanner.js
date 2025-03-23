import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion } from "framer-motion";
import axios from "axios";

const QRScanner = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("qr-reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      async (decodedText) => {
        setResult(decodedText);
        setStatus("Checking visitor...");
        
        try {
          const response = await axios.post("http://localhost:5001/visitor/check-in", {
            visitorId: decodedText,
          });

          if (response.data.success) {
            setStatus("✅ Visitor Checked In");
          } else {
            setStatus("❌ Visitor Not Found");
          }
        } catch (error) {
          console.error("Error checking in visitor:", error);
          setStatus("⚠ Server Error");
        }
      },
      (error) => {
        console.warn(error);
      }
    );

    return () => scanner.clear();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.h1 
        className="text-3xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Scan QR Code
      </motion.h1>

      {/* QR Scanner Box */}
      <motion.div
        id="qr-reader"
        className="w-64 h-64 border-4 border-blue-500 rounded-lg shadow-lg relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated Scanner Line */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-blue-500"
          animate={{ y: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </motion.div>

      {/* Status Message */}
      {status && (
        <motion.p 
          className={`mt-4 text-lg font-semibold ${status.includes("✅") ? "text-green-600" : "text-red-600"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status}
        </motion.p>
      )}
    </div>
  );
};

export default QRScanner;
