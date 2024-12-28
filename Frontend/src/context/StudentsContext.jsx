/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useRef } from "react";
import useAxiosFetch from "../hooks/useAxiosFetch";
import useWindowSize from "../hooks/useWindowSize";

const StudentsContext = createContext({});

export const StudentsProvider = ({ children }) => {
  const { width } = useWindowSize();
  const baseUrl = `https://students-app-fullstack-backend.onrender.com/api`;
  const confirmRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchedItems, setSearchedItems] = useState([]);
  const [editData, setEditData] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const {
    data: students = [],
    isLoading,
    fetchError,
    refetch,
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
    <StudentsContext.Provider
      value={{
        baseUrl,
        width,
        confirmRef,
        searchValue,
        setSearchValue,
        showPopup,
        setShowPopup,
        popupText,
        setPopupText,
        searchedItems,
        setSearchedItems,
        editData,
        setEditData,
        confirmation,
        setConfirmation,
        isLoading,
        fetchError,
        students,
        refetch,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsContext;
