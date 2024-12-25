/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Btns = ({ checkedItems }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-y-5 mt-8">
      <div className="flex items-end justify-end">
        <button className="text-white font-semibold p-3 text-nowrap mx-2 bg-activeColor hover:bg-red-500 transition">
          {checkedItems
            ? `(${checkedItems} delete all selected)`
            : "delete all"}
        </button>
        <button className="text-white font-semibold p-3 mx-2 bg-activeColor hover:bg-[#1a3152] transition">
          apply
        </button>
        <button className="text-white font-semibold p-3 mx-2 bg-activeColor hover:bg-[#1a3152] transition">
          save
        </button>
      </div>
      <button
        onClick={() => navigate("/addnewstudent")}
        className="self-end px-10 py-4 text-lg font-semibold text-white cursor-pointer bg-activeColor hover:bg-[#1a3152] transition"
      >
        Add a new Student
      </button>
    </div>
  );
};

export default Btns;
