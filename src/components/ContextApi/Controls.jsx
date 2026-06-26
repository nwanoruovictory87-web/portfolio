import { createContext, useContext, useState } from "react";

const controlsContextData = createContext(null);

export const ControlsContextProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(true);
  const [projectsPage, setProjectsPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [homeInview, setHomeInview] = useState(false);
  const [projectsInview, setProjectsInview] = useState(false);
  const [resumeInview, setResumeInview] = useState(false);
  const [aboutInview, setAboutInview] = useState(false);
  //console.log(chlidren);
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
      }}
    >
      {children}
    </controlsContextData.Provider>
  );
};

export const ControlsContextApi = () => useContext(controlsContextData);
