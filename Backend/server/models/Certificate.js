import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema(
  {
    certId: {
      type: String,
      required: true,
      unique: true, //  ensures no duplicate certificate IDs
    },
    name: {
      type: String,
      required: true, // enforce name presence
      trim: true,
    },
    domain: {
      type: String,
      required: true, //  enforce domain presence
      trim: true,
    },
    duration: {
      type: String,
      required: true, // enforce duration presence
      trim: true,
    },
  },
  {
    timestamps: true, //  adds createdAt and updatedAt automatically
  }
);

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
