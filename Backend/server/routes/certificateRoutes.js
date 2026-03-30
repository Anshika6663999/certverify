import express from "express";
import {
  createCert,
  verifyCert,
  downloadCert
} from "../controllers/certificateController.js";

const router = express.Router();

// IMPORTANT ORDER
router.post("/");
router.get("/download/:id", downloadCert);
router.get("/:id", verifyCert);

export default router;
