/* eslint-disable react/prop-types */

const Table = ({ students }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-[#7a797977]">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 border-r border-b border-[#7a797977]"
          >
            Id
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-r border-b border-[#7a797977]"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-r border-b border-[#7a797977]"
          >
            Course
          </th>
          <th
            scope="col"
            className="px-6 py-3 border-r border-b border-[#7a797977]"
          >
            Enrollment Date
          </th>
        </tr>
      </thead>
      {students.length ? (
        students.map((item, i) => (
          <tbody key={item._id}>
            <tr className="bg-slate-200 dark:bg-gray-800  dark:border-gray-700 border-b border-[#7a797977]">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white border-r border-[#7a797977]"
              >
                {i + 1}
              </th>
              <td className="px-6 py-4 border-r border-[#7a797977] text-gray-900">
                {item.name}
              </td>
              <td className="px-6 py-4 border-r border-[#7a797977]">
                {item.course}
              </td>
              <td className="px-6 py-4 border-r border-[#7a797977]">
                {new Date(item.enrollmentDate).toLocaleString("en-uk", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          <tr>
            <td
              colSpan="6"
              className="px-6 py-4 border-r border-[#7a797977] text-gray-900 font-semibold text-xl"
            >
              There`re no students to display
            </td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default Table;
