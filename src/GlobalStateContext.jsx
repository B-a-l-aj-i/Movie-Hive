// GlobalStateContext.js
import React, { createContext, useState } from 'react';

// Create the context with a default value
const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState("Hello, World!");

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;
