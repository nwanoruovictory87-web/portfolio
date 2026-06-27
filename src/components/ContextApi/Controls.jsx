import { createContext, useContext, useState, useEffect } from "react";
const controlsContextData = createContext(null);
export const ControlsContextProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(true);
  const [projectsPage, setProjectsPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  return (
    <controlsContextData.Provider
      value={{
        homePage,
        setHomePage,
        projectsPage,
        setProjectsPage,
        resumePage,
        setResumePage,
        aboutPage,
        setAboutPage,
        contactPage,
        setContactPage,
      }}
    >
      {children}
    </controlsContextData.Provider>
  );
};

export const ControlsContextApi = () => useContext(controlsContextData);
