import { useState } from "react";
import { verifyCert, downloadCert } from "../api/api";

export default function Verify() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      setError("");
      setData(null);
      const res = await verifyCert(id);
      setData(res); // backend returns certificate object directly
    } catch {
      setError("Certificate not found. Please check the ID.");
    }
  };

  const handleDownload = async () => {
    try {
      const blob = await downloadCert(data.certId);
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
      setError("Error downloading certificate.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Verify Your Internship Certificate
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Enter your unique certificate ID to instantly retrieve, preview, and download a verified certificate.
        </p>

        <input
          className="w-full border rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. CVS-2024-0042"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          onClick={handleVerify}
        >
          Verify Now
        </button>

        {error && (
          <p className="text-red-600 text-center mt-4">{error}</p>
        )}

        {data && (
          <div className="mt-6 bg-gray-50 p-4 rounded border">
            <h2 className="text-lg font-semibold mb-2">Certificate Details</h2>
            <p><strong>ID:</strong> {data.certId}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Domain:</strong> {data.domain}</p>
            <p><strong>Duration:</strong> {data.duration}</p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              onClick={handleDownload}
            >
              Download Certificate
            </button>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-500 text-center">
          Try IDs like <span className="font-mono">CVS-2824-8042</span> or <span className="font-mono">CVS-2824-8045</span>
        </div>
      </div>
    </div>
  );
}
