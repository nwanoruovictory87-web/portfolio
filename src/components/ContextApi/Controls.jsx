import { createContext, useContext, useState, useEffect } from "react";

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
  function handleHomePage() {
    setAboutPage(false);
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(true);
  }
  function handleProjectsPage() {
    setAboutPage(false);
    setResumePage(false);
    setHomePage(false);
    setProjectsPage(true);
  }
  function handleResumePage() {
    setAboutPage(false);
    setProjectsPage(false);
    setHomePage(false);
    setResumePage(true);
  }
  function handleAboutPage() {
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(false);
    setAboutPage(true);
  }
  useEffect(() => {
    if (homeInview) {
      handleHomePage();
    } else if (projectsInview) {
      handleProjectsPage();
    } else if (resumeInview) {
      handleResumePage();
    } else if (aboutInview) {
      handleAboutPage();
    }
  }, [homeInview, projectsInview, resumeInview, aboutInview]);
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
        setHomeInview,
        setProjectsInview,
        setResumeInview,
        setAboutInview,
      }}
    >
      {children}
    </controlsContextData.Provider>
  );
};

export const ControlsContextApi = () => useContext(controlsContextData);
