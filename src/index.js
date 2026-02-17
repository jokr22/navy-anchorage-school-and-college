const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Navy Anchorage School API is running" });
});

// School Info Routes
app.get("/api/school", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM school_info LIMIT 1");
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Academics Routes
app.get("/api/academics", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM academics ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Facilities Routes
app.get("/api/facilities", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM facilities ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Gallery Routes
app.get("/api/gallery", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM gallery ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Reviews Routes
app.get("/api/reviews", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM reviews ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Contact/Inquiry Routes
app.post("/api/inquiries", async (req, res) => {
  try {
    const { parentName, studentName, email, phone, className, message } =
      req.body;
    const result = await db.query(
      "INSERT INTO inquiries (parent_name, student_name, email, phone, class_name, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [parentName, studentName, email, phone, className, message],
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/inquiries", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM inquiries ORDER BY created_at DESC",
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
