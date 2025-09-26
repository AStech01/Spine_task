import { Link, NavLink } from "react-router-dom";
import { ListChecks, Home, Package } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <ListChecks size={22} /> Task Manager
        </Link>

        {/* Nav Links Centered */}
        <div className="flex-1 flex justify-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            <Home size={18} /> Home
          </NavLink>

          <NavLink
            to="/items"
            className={({ isActive }) =>
              `flex items-center gap-1 ${
                isActive ? "font-semibold underline" : ""
              }`
            }
          >
            <Package size={18} /> Items
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
