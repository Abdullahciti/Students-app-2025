/* eslint-disable react/prop-types */
import { FaUserCircle } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Header = ({ setSearchValue }) => {
  return (
    <div
      className={`mb-6 bg-white p-4 rounded-lg shadow-xl flex items-center justify-between sm:flex-nowrap flex-wrap-reverse sm:h-auto h-32`}
    >
      <div className="flex relative">
        <IoMdSearch className="text-xl absolute left-2 top-2/4 -translate-y-2/4" />
        <input
          className=" bg-[#cccccca2] pl-10 pr-3 text-lg rounded-xl py-3"
          placeholder="search students"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="text-2xl flex items-center text-nowrap gap-1.5 sm:self-auto self-end">
        <FaUserCircle className="text-activeColor" />
        <div className="text-xl">Admin</div>
      </div>
    </div>
  );
};

export default Header;
