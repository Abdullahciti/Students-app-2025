const TableHeader = () => {
  return (
    <thead className="bg-[#ccc]">
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2">Id</th>
        <th className="border border-gray-300 px-4 py-2">Name</th>
        <th className="border border-gray-300 px-4 py-2">Email</th>
        <th className="border border-gray-300 px-4 py-2">Course</th>
        <th className="border border-gray-300 px-4 py-2">status</th>
        <th className="border border-gray-300 px-4 py-2">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
