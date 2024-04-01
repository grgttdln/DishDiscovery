import React, { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [bkItems, setBKItems] = React.useState([]);

  // Add Meal to Bookmark
  const addBookmark = (currMealID) => {
    console.log(currMealID, bkItems);

    if (!bkItems.includes(currMealID)) {
      setBKItems((prevBKItems) => [...prevBKItems, currMealID]);
    }

    console.log(currMealID, bkItems);
  };

  // Remove Meal to Bookmark
  const removeBookmart = () => {};

  return (
    <GlobalStateContext.Provider value={{ bkItems, addBookmark }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};