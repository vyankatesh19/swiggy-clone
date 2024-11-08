import React, { useState } from "react";

const appContext = React.createContext();

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState({});

  return (
    <appContext.Provider value={{ state, setState }}>
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppContextProvider };
