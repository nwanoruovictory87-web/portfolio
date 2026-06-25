import { createContext, useContext, useState } from "react";

const controlsContextData = createContext(null);

export const ControlsContextProvider = ({ children }) => {
  //console.log(chlidren);
  return (
    <controlsContextData.Provider value={{}}>
      {children}
    </controlsContextData.Provider>
  );
};

export const ControlsContextApi = () => useContext(ControlsContextData);
