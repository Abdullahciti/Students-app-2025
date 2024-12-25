/* eslint-disable no-unused-vars */
// Routing
import { NavLink, Outlet } from "react-router-dom";

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

const Navbar = () => {
  const { width } = useWindowSize();

  return (
    <div
      className={`${width >= 1400 ? "w-3/12" : "w-3/12"} bg-altColor relative ${
        width <= 767 && "hidden"
      }`}
    >
      <div className="h-full w-full">
        {/* Logo and Name */}
        <h1 className="text-2xl mt-1 px-1.5 text-activeColor font-extrabold capitalize p-3 mb-6">
          <NavLink to={"/"} className="flex items-center mx-auto w-fit">
            <PiStudentBold className="text-3xl" /> Fullstack app
          </NavLink>
        </h1>
        {/* sidebar menu */}
        <ul className="flex flex-col items-center w-full">
          <li className="w-9/12 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg min-w-full text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
              to={"/dashboard"}
            >
              <MdDashboard /> Dashboard
            </NavLink>
          </li>
          <li className="w-9/12 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
              to={"/students"}
            >
              <MdGroup /> Students
            </NavLink>
          </li>
          <li className="w-9/12 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
              to={"/courses"}
            >
              <SiCoursera /> Courses
            </NavLink>
          </li>
          <li className="w-9/12 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
              to={"/exams"}
            >
              <PiExamThin /> Exams
            </NavLink>
          </li>
          <li className="w-9/12 mx-auto">
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
            >
              <TbReportSearch /> Reports
            </NavLink>
          </li>
          <li className="w-9/12 mx-auto">
            <NavLink
              className={({ isActive }) =>
                `mt-1 px-1.5 rounded-lg text-xl py-2 flex items-center gap-2 mx-1.5 transition ${
                  isActive
                    ? "bg-blue-950 text-white"
                    : "hover:bg-blue-950 hover:text-white"
                }`
              }
              to={"/settings"}
            >
              <IoMdSettings /> Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
