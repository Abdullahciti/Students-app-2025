import { useContext } from "react";
import StudentsContext from "../context/StudentsContext";
import { motion } from "framer-motion";

const PopupMessage = () => {
  const { popupText, setShowPopup } = useContext(StudentsContext);

  return (
    <div
      className="fixed left-0 top-0 flex items-center justify-center h-[100vh] w-full bg-black bg-opacity-50 z-50"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <motion.div
        className="relative bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-md text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => setShowPopup(false)}
          aria-label="Close popup"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 id="popup-title" className="text-2xl font-bold mb-2 text-gray-800">
          Notification
        </h2>
        <p id="popup-description" className="text-gray-600">
          {popupText}
        </p>
      </motion.div>
    </div>
  );
};

export default PopupMessage;
