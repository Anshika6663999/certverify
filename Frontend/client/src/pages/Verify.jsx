import { useState } from "react";
import { verifyCert, downloadCert } from "../api/api";

export default function Verify() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleVerify = async () => {
    try {
      const res = await verifyCert(id);
      setData(res); //  backend returns the certificate object directly
    } catch {
      alert("Certificate not found");
    }
  };

  const handleDownload = async () => {
    try {
      const blob = await downloadCert(data.certId); // ✅ get Blob from API
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.certId}.pdf`;
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
    <div className="p-10">
      <h1 className="text-2xl mb-4">Verify Certificate</h1>

      <input
        className="bg-gray-800 p-2"
        placeholder="Enter Certificate ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button className="ml-2 bg-green-500 px-3" onClick={handleVerify}>
        Verify
      </button>

      {data && (
        <div className="mt-4">
          <h2>{data.name}</h2>
          <button
            className="bg-blue-500 px-3 mt-2"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )}
    </div>
  );
}
