/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";


const SureDeletePupUp = ({ handleDelete, sureDel, setSureDel  }) => {

  const delRef = useRef(null);

    // Close form when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (delRef.current && !delRef.current.contains(event.target)) {
          setSureDel(false);
        }
      };
  
      if (sureDel) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [sureDel, setSureDel]);

  return (
    <div className="w-full top-0 left-0 absolute h-full flex items-center justify-center bg-[#00000052] z-[5000]">
      <div className="p-16 bg-white w-fit mx-auto text-center" ref={delRef}>
        <h1 className="mb-11">Are you sure you want to delete this student?</h1>
        <button
          onClick={handleDelete}
          className="mx-4 px-5 py-3 cursor-pointer bg-gray-950 text-red-500"
        >
          Yes
        </button>
        <button
          onClick={() => setSureDel(false)}
          className="mx-4 px-5 py-3 cursor-pointer bg-gray-950 text-white"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default SureDeletePupUp;
