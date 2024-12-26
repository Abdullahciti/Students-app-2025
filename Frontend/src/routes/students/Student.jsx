/* eslint-disable react/prop-types */
const Student = ({ student, index, setConfirmation, setEditData }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Student ({index + 1})
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Name:</span>
          <span className="text-gray-800 bg-gray-100 p-2 rounded w-2/3">
            {student.name}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Email:</span>
          <span className="text-gray-800 bg-gray-100 p-2 rounded w-2/3">
            {student.email}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Course:</span>
          <span className="text-gray-800 bg-gray-100 p-2 rounded w-2/3">
            {student.course}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3 text-wrap">
            Enrollment date:
          </span>
          <span className="text-gray-800 bg-gray-100 p-2 rounded w-2/3">
            {new Date(student.enrollmentDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          onClick={() => setConfirmation(true)}
          className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => setEditData(true)}
          className="text-sm text-white bg-[royalBlue] hover:bg-activeColor px-4 py-2 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Student;
