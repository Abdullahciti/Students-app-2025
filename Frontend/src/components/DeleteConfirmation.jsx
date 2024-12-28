/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import StudentsContext from "../context/StudentsContext";

const DeleteConfirmation = ({ handleDelete }) => {
  const { setConfirmation, confirmRef } = useContext(StudentsContext);

  const handleClick = (e) => {
    if (confirmRef && !confirmRef.current.contains(e.target)) {
      setConfirmation(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div
      className={`fixed flex justify-center items-center w-full h-[100vh] top-0 left-0 bg-[#000000c7]`}
    >
      <div
        className="flex flex-col w-96 gap-6 bg-altColor p-12"
        ref={confirmRef}
      >
        <h1 className="text-center">please confirm your choice</h1>
        <div className="flex justify-between w-full">
          <button
            onClick={() => handleDelete()}
            className="bg-red-500 py-2 px-4 text-xl text-white"
          >
            Yes
          </button>
          <button
            onClick={() => setConfirmation(false)}
            className="bg-red-black py-2 px-4 text-xl text-white"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
