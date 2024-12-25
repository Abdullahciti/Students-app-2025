/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";


const RSHeader = ({setAddStatus}) => {
    return (
        <div className="flex items-center justify-between">
        <h1 className="py-6 font-extrabold text-lg">Recent Students</h1>
        <button
          onClick={() => setAddStatus(true)}
          className="bg-activeColor text-white flex items-center p-4 rounded-xl gap-4 hover:bg-blue-950 active:scale-95 transition"
        >
          <FaPlus /> Add new student
        </button>
      </div>
    );
}

export default RSHeader;
