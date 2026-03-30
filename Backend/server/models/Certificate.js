
import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certId: { type: String, required: true, unique: true },
    name: String,
    domain: String,
    duration: String
  },
  { timestamps: true }
);

export default mongoose.model("Certificate", certificateSchema);
