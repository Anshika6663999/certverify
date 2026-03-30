import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 h-screen p-4">
      <h1 className="text-green-400 text-xl mb-4">CertVerify</h1>

      <Link to="/">Verify</Link><br/>
      <Link to="/admin">Admin</Link>
    </div>
  );
}
