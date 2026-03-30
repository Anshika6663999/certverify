import Certificate from "../models/Certificate.js";
import { generatePDF } from "../utils/generatePDF.js";

// Get all certificates
export const getCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.json(certificates);
  } catch (err) {
    console.error("Error fetching certificates:", err);
    res.status(500).json({ msg: "Error fetching certificates" });
  }
};

//  Create new certificate
export const createCert = async (req, res) => {
  try {
    const cert = await Certificate.create(req.body);
    res.json(cert);
  } catch (err) {
    console.error("Error creating certificate:", err);
    res.status(400).json({ msg: "Error creating certificate" });
  }
};

// Verify certificate by certId
export const verifyCert = async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certId: req.params.id });
    if (!cert) return res.status(404).json({ msg: "Not found" });
    res.json(cert);
  } catch (err) {
    console.error("Error verifying certificate:", err);
    res.status(500).json({ msg: "Error verifying certificate" });
  }
};

//  Download certificate by certId
export const downloadCert = async (req, res) => {
  try {
    const cert = await Certificate.findOne({ certId: req.params.id });
    if (!cert) return res.status(404).json({ msg: "Not
