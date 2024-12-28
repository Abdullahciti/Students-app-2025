import { useEffect, useContext, useState } from "react";
import StudentsContext from "../../context/StudentsContext";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PopupMessage from "../../components/PopupMessage";
import DeleteConfirmation from "../../components/DeleteConfirmation";

const EditStudent = () => {
  const { id: studentId } = useParams();

  const navigate = useNavigate();

  const {
    baseUrl,
    showPopup,
    setShowPopup,
    popupText,
    setPopupText,
    confirmation,
    setConfirmation,
    refetch,
  } = useContext(StudentsContext);

  const {
    data: student,
    fetchError,
    isLoading,
  } = useAxiosFetch(`${baseUrl}/students/${studentId}`);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [enrollmentDate, setEnrollmentData] = useState("");

  const handleSave = async () => {
    try {
      const response = await axios.patch(`${baseUrl}/students/${studentId}`, {
        name,
        email,
        course,
        enrollmentDate,
      });
      if (response.status === 200) {
        setShowPopup(true);
        setPopupText("user updated");
        refetch();
        navigate("/students");
      }
    } catch (err) {
      setShowPopup(true);
      console.log(err);
      setPopupText(`user didn\`t update cuz of this error ${err.message}`);
      console.error("Error updating student:", err.message);
    }
  };

  const handleDelete = async () => {
    try {
      // Use 'await' to properly handle the asynchronous operation
      const response = await axios.delete(`${baseUrl}/students/${student._id}`);
      if (response.status === 200) {
        // Ensure a successful response
        setConfirmation(false);
        setShowPopup(true);
        setPopupText("The User has been deleted successfully");
        refetch();
        navigate("/students");
      }
    } catch (err) {
      setShowPopup(true);
      setPopupText(
        `The User hasn\`t been deleted because of this error: ${err.message}`
      );
    }
  };

  // Handling date
  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    return isoDate.split("T")[0];
  };

  useEffect(() => {
    if (student) {
      setName(student.name || "");
      setEmail(student.email || "");
      setCourse(student.course || "");
      setEnrollmentData(
        student.enrollmentDate ? formatDate(student.enrollmentDate) : ""
      );
    }
  }, [student, setName, setEmail, setCourse, setEnrollmentData]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Edit Student</h2>
      {isLoading && <div>Loading...</div>}
      {fetchError && <div>Loading...</div>}
      {!isLoading && !fetchError && student && (
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
        </div>
      )}
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
      {confirmation && <DeleteConfirmation handleDelete={handleDelete} />}
      {showPopup && <PopupMessage popupText={popupText} />}
    </div>
  );
};

export default EditStudent;
