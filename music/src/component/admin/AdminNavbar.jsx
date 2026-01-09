import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="w-full h-16 bg-gray-900 text-white flex items-center justify-between px-8 shadow-md">
      
      {/* Logo */}
      <h1 className="text-xl font-semibold tracking-wide">
        Admin Panel
      </h1>

      {/* Menu */}
      <ul className="flex items-center gap-8 text-sm font-medium">
        <Link to="/admin" className="cursor-pointer hover:text-blue-400 transition">
          Dashboard
        </Link>
        <li className="cursor-pointer hover:text-blue-400 transition">
          Product Details
        </li>
        <Link to="/admin/add-product" className="cursor-pointer hover:text-blue-400 transition">
          Add Product
        </Link>
        <li className="cursor-pointer hover:text-blue-400 transition">
          Settings
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
