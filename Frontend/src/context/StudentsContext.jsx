/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const StudentsContext = createContext({});

export const DataProvider = ({ children }) => {
  return (
    <StudentsContext.Provider value={{}}>{children}</StudentsContext.Provider>
  );
};

export default StudentsContext;
