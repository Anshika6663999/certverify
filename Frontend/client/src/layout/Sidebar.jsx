import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-900 h-screen p-4">
      <h1 className="text-green-400 text-xl mb-4">CertVerify</h1>

      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-300"
          }
        >
          Verify
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? "text-white font-bold" : "text-gray-300"
          }
        >
          Admin
        </NavLink>
      </nav>
    </aside>
  );
}
