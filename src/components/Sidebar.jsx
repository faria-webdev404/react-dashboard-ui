import React from "react";
import {
  LayoutDashboard,
  Table,
  BarChart2,
  Lock,
  FileText,
  Menu,
} from "lucide-react";
import { FaRegDotCircle } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-[#2A3F54] text-white flex flex-col transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:static md:translate-x-0 md:flex`}
      >
        <div className="px-6 mt-7 py-4 flex items-center gap-3 border-b border-gray-700">
          <div className="bg-cyan-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl font-montserrat">
            F
          </div>
          <h1 className="text-xl font-bold tracking-wide font-montserrat">
            Analytics
          </h1>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-3 text-cyan-400 font-semibold cursor-pointer">
              <LayoutDashboard size={18} />
              Dashboard
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
              <Menu size={18} />
              Posts
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
              <BarChart2 size={18} />
              Insights
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
              <Lock size={18} />
              Authentication
              <span className="ml-auto bg-red-500 text-xs px-2 py-0.5 rounded-full">
                NEW
              </span>
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
              <FileText size={18} />
              Users
            </li>

            <li className="flex items-center gap-3 hover:text-cyan-300 cursor-pointer">
              <FileText size={18} />
              Documentation
            </li>

            <li className="flex items-center gap-3 text-gray-400 cursor-not-allowed">
              <Menu size={18} />
              Disabled Menu
            </li>
          </ul>
        </nav>

        <div className="text-gray-400 text-xs px-6 py-4 border-t border-gray-700">
          © 2025 Dashboard
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
