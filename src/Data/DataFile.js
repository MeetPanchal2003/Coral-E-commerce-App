import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataFile = ({ children }) => {
  const [Data, setData] = useState([]);

  const AddData = (value) => {
    setData(value);
  };

  return (
    <DataContext.Provider value={{ Data, AddData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
