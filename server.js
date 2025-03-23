// Import required modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize Express App
const app = express();

// Middleware
app.use(cors({ origin: "*" })); // ✅ Allows frontend requests
app.use(express.json()); // ✅ Parses JSON request body

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/vms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Visitor Schema & Model
const visitorSchema = new mongoose.Schema({
  name: String,
  contact: String,
  company: String,
  purpose: String,
  status: { type: String, default: "Pending" },
});
const Visitor = mongoose.model("Visitor", visitorSchema);

// ✅ Route: Register a Visitor (POST /register)
app.post("/register", async (req, res) => {
  try {
    const visitor = new Visitor(req.body);
    await visitor.save();
    res.json({ message: "Visitor Registered", visitor });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Route: Get All Visitors (GET /visitors)
app.get("/visitors", async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (error) {
    console.error("❌ Fetching Visitors Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Route: Get Visitor by ID (GET /visitor/:id)
app.get("/visitor/:id", async (req, res) => {
  try {
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) {
      return res.status(404).json({ error: "Visitor not found" });
    }
    res.json(visitor);
  } catch (error) {
    console.error("❌ Error Fetching Visitor:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Route: Check-in Visitor (PUT /checkin/:id)
app.put("/checkin/:id", async (req, res) => {
  try {
    console.log("📡 Received Check-in Request for ID:", req.params.id);

    // Ensure MongoDB correctly handles ObjectId
    const visitor = await Visitor.findById(req.params.id);
    if (!visitor) {
      console.log("❌ Visitor Not Found in Database");
      return res.status(404).json({ error: "Visitor not found" });
    }

    console.log("🔍 Visitor Before Update:", visitor); // ✅ Debugging log

    visitor.status = "Checked In";
    await visitor.save(); // ✅ Ensure MongoDB saves the update

    console.log("✅ Visitor Checked In Successfully:", visitor); // ✅ Debugging log
    res.json({ message: "✅ Visitor Checked In", visitor });
  } catch (error) {
    console.error("❌ Error updating visitor:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ Route: Check-out Visitor (PUT /checkout/:id)
app.put("/checkout/:id", async (req, res) => {
  try {
    console.log("📡 Checking out visitor:", req.params.id);

    const visitor = await Visitor.findByIdAndUpdate(
      req.params.id,
      { status: "Checked Out" },
      { new: true }
    );

    if (!visitor) {
      console.log("❌ Visitor Not Found");
      return res.status(404).json({ error: "Visitor not found" });
    }

    console.log("✅ Visitor Checked Out:", visitor);
    res.json({ message: "✅ Visitor Checked Out", visitor });
  } catch (error) {
    console.error("❌ Error Updating Visitor Status:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Start Server
const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
