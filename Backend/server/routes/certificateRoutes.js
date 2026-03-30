import express from "express";
import {
  getCertificates,
  createCert,
  verifyCert,
  downloadCert
} from "../controllers/certificateController.js";

const router = express.Router();

// IMPORTANT ORDER
router.post("/", createCert);          // Create new certificate
router.get("/download/:id", downloadCert); // Download certificate by ID
router.get("/:id", verifyCert);        // Verify certificate by ID
router.get("/", getCertificates);      // Get all certificates

export default router;
