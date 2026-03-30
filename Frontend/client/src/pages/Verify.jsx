import { useState } from "react";
import { verifyCert, downloadCert } from "../api/api";

export default function Verify() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handle = async () => {
    try {
      const res = await verifyCert(id);
      setData(res.data);
    } catch {
      alert("Not found");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Verify Certificate</h1>

      <input
        className="bg-gray-800 p-2"
        onChange={(e)=>setId(e.target.value)}
      />
      <button className="ml-2 bg-green-500 px-3" onClick={handle}>
        Verify
      </button>

      {data && (
        <div className="mt-4">
          <h2>{data.name}</h2>
          <button onClick={()=>downloadCert(data.certId)}>
            Download
          </button>
        </div>
      )}
    </div>
  );
}
