// Routing
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

// Hooks
import useWindowSize from "./hooks/useWindowSize";

// Icons
import { PiStudentBold } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { SiCoursera } from "react-icons/si";
import { TbReportSearch } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { PiExamThin } from "react-icons/pi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // Hamburger and close icons

const Navbar = () => {
  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full bg-activeColor text-white top-0 z-50 ${
        width > 767 ? "sm:hidden" : "fixed min-w-[360px]"
      }`}
    >
      {/* Top Navbar */}
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
          <NavLink
            to="/"
            className="flex items-center gap-2 text-altColor hover:text-white transition"
          >
            <PiStudentBold className="text-3xl" /> Fullstack App
          </NavLink>
        </h1>

        {/* Menu Toggle Icon */}
        <button
          onClick={toggleMenu}
          className="text-altColor hover:text-white text-3xl focus:outline-none transition"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul
        ref={menuRef}
        className={`absolute top-16 right-0 w-2/3 bg-gray-900 text-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg border-b border-gray-700 ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <MdDashboard className="inline mr-2" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg border-b border-gray-700 ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <MdGroup className="inline mr-2" /> Students
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg border-b border-gray-700 ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <SiCoursera className="inline mr-2" /> Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exams"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg border-b border-gray-700 ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <PiExamThin className="inline mr-2" /> Exams
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg border-b border-gray-700 ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <TbReportSearch className="inline mr-2" /> Reports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `block px-4 py-2 text-lg ${
                isActive
                  ? "bg-blue-950 text-white"
                  : "hover:bg-blue-950 hover:text-white"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <IoMdSettings className="inline mr-2" /> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
