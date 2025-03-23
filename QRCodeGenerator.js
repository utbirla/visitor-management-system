import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ visitorId }) => {
  if (!visitorId) {
    console.error("❌ No visitor ID provided!"); // Debugging
    return null;
  }

  const localIP = "10.12.60.126"; // Replace with your actual local IP
  const qrValue = `http://${localIP}:3000/visitor/${visitorId}`; // ✅ Correct URL format

  console.log("🔹 QR Code Generated with ID:", visitorId); // Debugging

  return (
    <div className="text-center mt-4">
      <p className="text-lg font-bold">Your QR Code</p>
      <QRCodeCanvas value={qrValue} size={200} />
      <a href={qrValue} download={`VisitorQRCode-${visitorId}.png`} className="block mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Download QR Code
      </a>
    </div>
  );
};

export default QRCodeGenerator;
