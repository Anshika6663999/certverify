import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./routes/certificateRoutes.js";

dotenv.config();

// Connect to MongoDB
connectDB()
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // exit if DB fails
  });

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || "*", //  restrict in production
}));
app.use(express.json());

// Mount routes
app.use("/api/certificates", routes);

// Health check route
app.get("/", (req, res) => {
  res.send("CertVerify backend is running");
});

// Use PORT from environment or fallback
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
