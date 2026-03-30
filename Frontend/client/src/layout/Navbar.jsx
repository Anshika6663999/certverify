import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Dynamic title based on route
  const title =
    location.pathname === "/admin" ? "Admin Dashboard" : "Verify Certificate";

  return (
    <header className="p-4 bg-gray-800 text-white flex items-center justify-between">
      <h1 className="text-lg font-semibold">{title}</h1>
      {/* Future expansion: user info, logout, etc. */}
    </header>
  );
}
