/* eslint-disable react/prop-types */
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";
const TableDataCell = ({
  checkedItems,
  handleCheckboxChange,
  confirmDelete,
  item,
}) => {
  return (
    <td className="flex items-center gap-3 text-xl border border-gray-300 pl-4 py-2 text-center">
        <input
          type="checkbox"
          className="min-w-10 min-h-10 cursor-pointer"
          checked={checkedItems[item._id] || false}
          onChange={(e) => handleCheckboxChange(e, item._id)}
        />
        <button
          onClick={() => confirmDelete(item._id)}
          className="text-red-500 hover:text-red-600 transition motion-reduce:"
        >
          <RiDeleteBin6Fill className="text-4xl" />
        </button>
        <button className="text-blue-500">
          <CiEdit className="text-4xl" />
        </button>
    </td>
  );
};

export default TableDataCell;
