/* eslint-disable react/prop-types */
// Axios
import axios from "axios";

// Global
import { useState } from "react";

// Components
import DeleteConfirmation from "../../components/DeleteConfirmation";
import Student from "./Student";
import EditStudent from "./EditStudent";
import PopupMessage from "../../components/PopupMessage";

const SingelStudent = ({
  baseUrl,
  student,
  index,
  showPopup,
  popupText,
  setShowPopup,
  setPopupText,
}) => {
  const [editData, setEditData] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      // Use 'await' to properly handle the asynchronous operation
      const response = await axios.delete(`${baseUrl}/students/${student._id}`);
      if (response.status === 200) {
        // Ensure a successful response
        setConfirmation(false);
        console.log(`${baseUrl}/${student._id}`);
        setShowPopup(true);
        setPopupText("The User has been deleted");
      }
    } catch (err) {
      console.log(err.message);
      setShowPopup(true);
      setPopupText(
        `The User hasn\`t been deleted because of this error: ${err.message}`
      );
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200">
      {!editData ? (
        <Student
          student={student}
          index={index}
          setConfirmation={setConfirmation}
          setEditData={setEditData}
        />
      ) : (
        <EditStudent
          baseUrl={baseUrl}
          student={student}
          index={index}
          setConfirmation={setConfirmation}
          setEditData={setEditData}
          setShowPopup={setShowPopup}
          setPopupText={setPopupText}
        />
      )}
      {confirmation && (
        <DeleteConfirmation
          handleDelete={handleDelete}
          setConfirmation={setConfirmation}
        />
      )}
      {showPopup && <PopupMessage popupText={popupText} />}
    </div>
  );
};

export default SingelStudent;
