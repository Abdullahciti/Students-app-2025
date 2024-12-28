
import { FaUsers } from "react-icons/fa";

const RSHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="py-6 font-extrabold text-2xl flex items-center">
        <FaUsers className="ml-1.5 mr-3" /> Recent Students
      </h1>
    </div>
  );
};

export default RSHeader;
