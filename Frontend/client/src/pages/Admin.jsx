import { useState } from "react";
import { createCert } from "../api/api";

export default function Admin() {
  const [form, setForm] = useState({});

  const submit = async () => {
    await createCert(form);
    alert("Created");
  };

  return (
    <div className="p-10">
      <input placeholder="ID" onChange={e=>setForm({...form,certId:e.target.value})}/>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Domain" onChange={e=>setForm({...form,domain:e.target.value})}/>
      <input placeholder="Duration" onChange={e=>setForm({...form,duration:e.target.value})}/>
      <button onClick={submit}>Create</button>
    </div>
  );
}
