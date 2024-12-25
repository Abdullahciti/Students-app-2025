/* eslint-disable react/prop-types */

import TableDataCell from "./tablebody/TableDataCell";

const TableBody = ({data, checkedItems, handleCheckboxChange, confirmDelete}) => {
    return (
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">{item.name}</td>
            <td className="border border-gray-300 px-4 py-2">{item.email}</td>
            <td className="border border-gray-300 px-4 py-2">{item.course}</td>
            <td className="border border-gray-300 px-4 py-2">{item.status ? item.status : "inactive"}</td>
            <TableDataCell 
                confirmDelete={confirmDelete}
                item={item}
                checkedItems={checkedItems}
                handleCheckboxChange={handleCheckboxChange}
             />
          </tr>
        ))}
      </tbody>
    );
}

export default TableBody;
