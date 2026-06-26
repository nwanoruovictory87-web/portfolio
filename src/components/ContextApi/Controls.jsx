import { createContext, useContext, useState, useEffect } from "react";
const controlsContextData = createContext(null);
export const ControlsContextProvider = ({ children }) => {
  const [homePage, setHomePage] = useState(true);
  const [projectsPage, setProjectsPage] = useState(false);
  const [resumePage, setResumePage] = useState(false);
  const [aboutPage, setAboutPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [homeInview, setHomeInview] = useState(false);
  const [projectsInview, setProjectsInview] = useState(false);
  const [resumeInview, setResumeInview] = useState(false);
  const [aboutInview, setAboutInview] = useState(false);
  const [contactInview, setContactInview] = useState(false);

  //console.log(chlidren);
  function handleHomePage() {
    setContactPage(false);
    setAboutPage(false);
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(true);
  }
  function handleProjectsPage() {
    setContactPage(false);
    setAboutPage(false);
    setResumePage(false);
    setHomePage(false);
    setProjectsPage(true);
  }
  function handleResumePage() {
    setContactPage(false);
    setAboutPage(false);
    setProjectsPage(false);
    setHomePage(false);
    setResumePage(true);
  }
  function handleAboutPage() {
    setContactPage(false);
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(false);
    setAboutPage(true);
  }
  function handleContactPage() {
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(false);
    setAboutPage(false);
    setContactPage(true);
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
    } else if (contactInview) {
      handleContactPage();
    }
  }, [homeInview, projectsInview, resumeInview, aboutInview, contactInview]);
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
        setHomeInview,
        setProjectsInview,
        setResumeInview,
        setAboutInview,
        contactInview,
        setContactInview,
      }}
    >
      {children}
    </controlsContextData.Provider>
  );
};

export const ControlsContextApi = () => useContext(controlsContextData);
