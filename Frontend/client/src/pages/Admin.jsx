import { useState } from "react";
import { createCert } from "../api/api";

export default function Admin() {
  const [form, setForm] = useState({
    certId: "",
    name: "",
    domain: "",
    duration: ""
  });

  const submit = async () => {
    try {
      await createCert(form);
      alert("Certificate created successfully!");
      setForm({ certId: "", name: "", domain: "", duration: "" }); //  reset form
    } catch (err) {
      console.error("Error creating certificate:", err);
      alert("Error creating certificate. Please check inputs or try again.");
    }
  };

  return (
    <div className="p-10 space-y-4">
      <input
        placeholder="ID"
        value={form.certId}
        onChange={e => setForm({ ...form, certId: e.target.value })}
      />
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Domain"
        value={form.domain}
        onChange={e => setForm({ ...form, domain: e.target.value })}
      />
      <input
        placeholder="Duration"
        value={form.duration}
        onChange={e => setForm({ ...form, duration: e.target.value })}
      />
      <button onClick={submit}>Create</button>
    </div>
  );
}
