import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VisitorDetails = () => {
  const { id } = useParams();
  const [visitor, setVisitor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVisitor = async () => {
      try {
        const response = await axios.get(`http://10.12.60.126:5001/visitor/${id}`); // Updated to port 5001
        setVisitor(response.data);
      } catch (error) {
        setError("Visitor not found or server error.");
      } finally {
        setLoading(false);
      }
    };
    fetchVisitor();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading visitor details...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Visitor Details</h2>
        <p><strong>Name:</strong> {visitor.name}</p>
        <p><strong>Contact:</strong> {visitor.contact}</p>
        <p><strong>Company:</strong> {visitor.company || "N/A"}</p>
        <p><strong>Purpose:</strong> {visitor.purpose || "N/A"}</p>
        <p><strong>Host:</strong> {visitor.host || "N/A"}</p>
        <p className="font-semibold text-lg">
          <strong>Status:</strong> <span className="text-blue-500">{visitor.status}</span>
        </p>
      </div>
    </div>
  );
};

export default VisitorDetails;
