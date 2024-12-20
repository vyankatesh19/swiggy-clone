import React, { useState } from "react";

const appContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({ isLoading: false });

  return (
    <appContext.Provider value={{ state, setState }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppContextProvider };
