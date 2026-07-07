import { useState, useRef, useEffect } from "react";
import { ControlsContextApi } from "./ContextApi/Controls";
function Menu() {
  const controls = ControlsContextApi();
  const {
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
  } = controls;
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

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
    if (
      !homeRef.current ||
      !projectsRef.current ||
      !resumeRef.current ||
      !aboutRef.current ||
      !contactRef.current
    )
      return;
    if (homePage) {
      homeRef.current.classList.remove("text-gray-200");
      homeRef.current.classList.add("text-[#0505a0]");
    } else {
      homeRef.current.classList.remove("text-[#0505a0]");
      homeRef.current.classList.add("text-gray-200");
    }
    if (projectsPage) {
      projectsRef.current.classList.remove("text-gray-200");
      projectsRef.current.classList.add("text-[#0505a0]");
    } else {
      projectsRef.current.classList.remove("text-[#0505a0]");
      projectsRef.current.classList.add("text-gray-200");
    }
    if (resumePage) {
      resumeRef.current.classList.remove("text-gray-200");
      resumeRef.current.classList.add("text-[#0505a0]");
    } else {
      resumeRef.current.classList.remove("text-[#0505a0]");
      resumeRef.current.classList.add("text-gray-200");
    }
    if (aboutPage) {
      aboutRef.current.classList.remove("text-gray-200");
      aboutRef.current.classList.add("text-[#0505a0]");
    } else {
      aboutRef.current.classList.remove("text-[#0505a0]");
      aboutRef.current.classList.add("text-gray-200");
    }
    if (contactPage) {
      contactRef.current.classList.remove("text-gray-200");
      contactRef.current.classList.add("text-[#0505a0]");
    } else {
      contactRef.current.classList.remove("text-[#0505a0]");
      contactRef.current.classList.add("text-gray-200");
    }
  }, [homePage, projectsPage, resumePage, aboutPage, contactPage]);
  return (
    <div className="w-[50%] min-[800px]:hidden max-w-69.25 h-fit right-0 absolute -mt-0.5">
      <div className="bg-[#141414] flex flex-col gap-4 p-5 w-full text-gray-200 text-[20px] min-[500px]:rounded-2xl">
        <span
          className="  cursor-pointer"
          ref={homeRef}
          onClick={handleHomePage}
        >
          <a href="#home">Home</a>
        </span>
        <span
          className="  cursor-pointer"
          ref={projectsRef}
          onClick={handleProjectsPage}
        >
          <a href="#projects">Projects</a>
        </span>
        <span
          className="  cursor-pointer"
          ref={resumeRef}
          onClick={handleResumePage}
        >
          <a
            href="./public/Victory_Nwanoruo_Resume.pdf"
            download="Victory_Nwanoruo_Resume.pdf"
          >
            Resume
          </a>
        </span>
        <span
          className="  cursor-pointer"
          ref={aboutRef}
          onClick={handleAboutPage}
        >
          <a href="#about">About</a>
        </span>
        <span
          className="  cursor-pointer"
          ref={contactRef}
          onClick={handleContactPage}
        >
          <a href="#contact">Contact</a>
        </span>
        {/**socials */}
        <a
          className="flex gap-2 cursor-pointer items-center "
          href="https://github.com/nwanoruovictory87-web"
          target="_blank"
        >
          <i className="fa-brands fa-github text-gray-200"></i>
          <h5>github</h5>
        </a>
        <a
          className="flex gap-2 cursor-pointer items-center"
          href="https://www.linkedin.com/in/victory-nwanoruo-2189493b4/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin text-blue-400"></i>
          <h5>linkedin</h5>
        </a>
        <a
          className="flex gap-2 cursor-pointer items-center"
          href="https://www.youtube.com/@CodeWithVictory01"
          target="_blank"
        >
          <i className="fa-brands fa-youtube text-red-600"></i>
          <h5>youtube</h5>
        </a>
        <a
          className="flex gap-2 cursor-pointer items-center"
          href="https://web.facebook.com/people/Victor-Nwanoruo/61589589896378/"
          target="_blank"
        >
          <i className="fa-brands fa-facebook text-blue-600"></i>
          <h5>facebook</h5>
        </a>
      </div>
    </div>
  );
}
export default Menu;
