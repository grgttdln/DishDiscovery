import React, { createContext, useState, useContext } from "react";

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  // Component
  const [showComponent, setShowComponent] = useState(true);

  // Bookmark
  const [bkItems, setBKItems] = useState([]);

  // Search Meal
  const [meal, setMeal] = useState("");

  // Add Meal to Bookmark
  const addBookmark = (currMealID) => {
    if (!bkItems.includes(currMealID)) {
      setBKItems((prevBKItems) => [...prevBKItems, currMealID]);
    }

    console.log(currMealID, bkItems);
  };

  const removeBookmark = (currMealID) => {
    setBKItems((prevBKItems) =>
      prevBKItems.filter((item) => item !== currMealID)
    );
  };

  return (
    <GlobalStateContext.Provider
      value={{
        bkItems,
        addBookmark,
        removeBookmark,
        showComponent,
        setShowComponent,
        setMeal,
        meal,
      }}
    >
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
