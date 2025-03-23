const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: String,
  contact: String,
  company: String,
  purpose: String,
  host: String,
  status: { type: String, default: "Pending" }, 
  checkInTime: Date,
  checkOutTime: Date
});

const Visitor = mongoose.model("Visitor", visitorSchema);
module.exports = Visitor;
