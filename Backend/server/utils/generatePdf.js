import PDFDocument from "pdfkit";

export const generatePDF = (res, cert) => {
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  doc.pipe(res);

  doc.fontSize(22).text("Amdox Technologies", { align: "center" });
  doc.moveDown();

  doc.text("Certificate of Completion", { align: "center" });
  doc.moveDown();

  doc.text(`This certifies that ${cert.name}`, { align: "center" });
  doc.text(`has completed ${cert.domain}`, { align: "center" });
  doc.text(`Duration: ${cert.duration}`, { align: "center" });

  doc.moveDown();
  doc.text(`Certificate ID: ${cert.certId}`, { align: "center" });

  doc.end();
};
