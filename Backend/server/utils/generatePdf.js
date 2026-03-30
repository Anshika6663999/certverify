import PDFDocument from "pdfkit";

export const generatePDF = (res, cert) => {
  try {
    const doc = new PDFDocument();

    // Set headers for download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${cert.certId}.pdf`
    );

    //  Pipe PDF to response
    doc.pipe(res);

    // Certificate content
    doc.fontSize(22).text("Amdox Technologies", { align: "center" });
    doc.moveDown();

    doc.fontSize(18).text("Certificate of Completion", { align: "center" });
    doc.moveDown();

    doc.fontSize(14).text(`This certifies that ${cert.name}`, { align: "center" });
    doc.text(`has completed ${cert.domain}`, { align: "center" });
    doc.text(`Duration: ${cert.duration}`, { align: "center" });

    doc.moveDown();
    doc.text(`Certificate ID: ${cert.certId}`, { align: "center" });

    //  Include issued date if available
    if (cert.createdAt) {
      doc.moveDown();
      doc.text(`Issued Date: ${cert.createdAt.toDateString()}`, { align: "center" });
    }

    // Finalize PDF
    doc.end();
  } catch (err) {
    console.error("Error generating PDF:", err);
    res.status(500).json({ msg: "Error generating PDF" });
  }
};
