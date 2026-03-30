import React from "react";

const CertificateDownload = ({ certId }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/certificates/${certId}/download`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Failed to download certificate");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${certId}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Error downloading certificate:", err);
      alert("Error downloading certificate");
    }
  };

  return (
    <button onClick={handleDownload}>
      Download Certificate
    </button>
  );
};

export default CertificateDownload;
