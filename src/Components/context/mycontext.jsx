import React, { createContext, useContext } from "react";

// Create a Context
const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const value = {}; // Your context value here
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Custom hook to use the context
export const useMyContext = () => useContext(MyContext);
