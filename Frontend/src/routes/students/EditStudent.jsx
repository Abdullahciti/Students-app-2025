/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

const EditStudent = ({
  baseUrl,
  student,
  index,
  setConfirmation,
  setEditData,
  setPopupText,
  setShowPopup,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [enrollmentDate, setEnrollmentData] = useState("");
  const [status, setStatus] = useState("");

  // Populate fields when the component is mounted or when student changes
  useEffect(() => {
    if (student) {
      setName(student.name || "");
      setEmail(student.email || "");
      setCourse(student.course || "");
      setEnrollmentData(student.enrollmentDate || "");
      setStatus(student.status || "");
    }
  }, [student]);

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `${baseUrl}/${student._id}`,
        {
          name,
          email,
          course,
          enrollmentDate,
          status,
        }
      );
      if (response.status === 200) {
        setShowPopup(true);
        console.log("Student updated successfully:", response.data);
        setEditData(false); // Close the edit modal/form
        setPopupText("user updated");
      }
    } catch (err) {
      setShowPopup(true);
      setPopupText(`user didn\`t update cuz of this error ${err.message}`);
      console.error("Error updating student:", err.message);
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Edit Student ({index + 1})
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Name:</span>
          <input
            className="text-gray-800 bg-gray-100 p-2 rounded w-2/3"
            type="text"
            aria-label="name"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Email:</span>
          <input
            className="text-gray-800 bg-gray-100 p-2 rounded w-2/3"
            type="email"
            aria-label="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Course:</span>
          <input
            className="text-gray-800 bg-gray-100 p-2 rounded w-2/3"
            type="text"
            aria-label="course"
            id="course"
            placeholder="Enter course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">
            Enrollment date:
          </span>
          <input
            className="text-gray-800 bg-gray-100 p-2 rounded w-2/3"
            type="date"
            aria-label="enrollmentDate"
            id="enrollmentDate"
            value={enrollmentDate}
            onChange={(e) => setEnrollmentData(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <span className="font-medium text-gray-600 w-1/3">Status:</span>
          <input
            className="text-gray-800 bg-gray-100 p-2 rounded w-2/3"
            type="text"
            aria-label="status"
            id="status"
            placeholder="Enter status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-3">
        <button
          onClick={() => setConfirmation(true)}
          className="text-sm text-white px-4 py-2 rounded bg-red-500 hover:bg-red-600"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className="text-sm text-white bg-[royalBlue] hover:bg-blue-600 px-4 py-2 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditStudent;
