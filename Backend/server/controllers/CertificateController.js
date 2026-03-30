import Certificate from "../models/Certificate.js";
import { generatePDF } from "../utils/generatePDF.js";

export const createCert = async (req, res) => {
  try {
    const cert = await Certificate.create(req.body);
    res.json(cert);
  } catch (err) {
    res.status(400).json({ msg: "Error creating certificate" });
  }
};

export const verifyCert = async (req, res) => {
  const cert = await Certificate.findOne({ certId: req.params.id });
  if (!cert) return res.status(404).json({ msg: "Not found" });
  res.json(cert);
};

export const downloadCert = async (req, res) => {
  const cert = await Certificate.findOne({ certId: req.params.id });
  if (!cert) return res.status(404).json({ msg: "Not found" });

  generatePDF(res, cert);
};
