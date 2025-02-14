// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  

  const setDataValue = (value) => {
    setData(value);
  };

  return (
    <DataContext.Provider value={{ data, setDataValue }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
