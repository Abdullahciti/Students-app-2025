import { useContext } from "react";

import SingelStudent from "../routes/students/SingelStudent";
import Header from "../Header";
import StudentsContext from "../context/StudentsContext";
import { Link } from "react-router-dom";

const Students = () => {
  const { searchedItems, isLoading, fetchError, searchValue } =
    useContext(StudentsContext);

  return (
    <div className="max-w-full">
      <Header />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {isLoading && (
          <h1 className="w-full py-20 text-xl font-semibold text-center">
            Loading...
          </h1>
        )}
        {fetchError && (
          <h1 className="w-full py-20 text-xl font-semibold text-center">
            {fetchError}
          </h1>
        )}
        {!isLoading &&
          !fetchError &&
          searchedItems &&
          searchedItems.map((student, index) => (
            <SingelStudent key={student._id} index={index} student={student} />
          ))}
      </div>
      {!searchValue && !searchedItems && (
        <h1 className="w-full py-20 text-xl font-semibold text-center">
          There are no registerd students please add one!
        </h1>
      )}
      <div className="grid-col-1 flex justify-end items-center mt-6">
        <Link
          to={"/addnewstudent"}
          className="self-end bg-activeColor w-fit py-1.5 px-4 text-white font-bold text-2xl rounded-lg"
        >
          Add new student
        </Link>
      </div>
    </div>
  );
};

export default Students;
