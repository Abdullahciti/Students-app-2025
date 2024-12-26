/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import SingelStudent from "../routes/students/SingelStudent";
import Btns from "../routes/students/Btns";
import Header from "../Header";

// انا عملت ملف الكونتكست بس وجطيتها اب تحت .
import useAxiosFetch from "../hooks/useAxiosFetch";
import { DataProvider } from "../context/StudentsContext";

const Students = ({ baseUrl }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [checkedItems, setCheckedItems] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);

  const {
    data: students = [], // Ensure default value
    isLoading,
    fetchError,
  } = useAxiosFetch(`${baseUrl}/students`);

  useEffect(() => {
    if (!students) return;

    const normalize = (str) => str.toLowerCase().replaceAll(" ", "");

    const filteredItems = searchValue
      ? students.filter(
          (item) =>
            normalize(item.name).includes(normalize(searchValue)) ||
            normalize(item.email).includes(normalize(searchValue))
        )
      : students;

    setSearchedItems(filteredItems);
  }, [searchValue, students]);

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }
  }, [showPopup]);

  return (
    <div className="max-w-full">
      <DataProvider>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
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
              <SingelStudent
                key={student._id}
                index={index}
                baseUrl={baseUrl}
                student={student}
                setCheckedItems={setCheckedItems}
                showPopup={showPopup}
                popupText={popupText}
                setShowPopup={setShowPopup}
                setPopupText={setPopupText}
              />
            ))}
        </div>
        {!isLoading && !students.length && (
          <h1 className="w-full py-20 text-xl font-semibold text-center">
            There are no registerd students please add one!
          </h1>
        )}
        <Btns checkedItems={checkedItems} />
      </DataProvider>
    </div>
  );
};

export default Students;
