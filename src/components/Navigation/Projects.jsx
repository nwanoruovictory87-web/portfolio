import { useState, useEffect, useRef } from "react";
import { ControlsContextApi } from "../ContextApi/Controls";
function Projects() {
  const imageList = [
    "/images/D-rahim-tech5.jpg",
    "/images/D-rahim-tech1.jpg",
    "/images/D-rahim-tech4.jpg",
    "/images/D-rahim-tech3.jpg",
  ];
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const imageUrl = imageList[count];
  const maxImage = imageList.length - 1;
  function next() {
    if (count === maxImage) return;
    setCount((prevCount) => (prevCount += 1));
  }
  function preView() {
    if (count === 0) return;
    setCount((prevCount) => (prevCount -= 1));
  }
  const imageUrl2 = imageList[count2];
  const maxImage2 = imageList.length - 1;
  function next2() {
    if (count2 === maxImage2) return;
    setCount2((prevCount) => (prevCount += 1));
  }
  function preView2() {
    if (count2 === 0) return;
    setCount2((prevCount) => (prevCount -= 1));
  }
  const controls = ControlsContextApi();
  const { setProjectsInview } = controls;
  const projectsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsInview(true);
        } else {
          setProjectsInview(false);
        }
      },
      { threshold: 0.3 },
    );
    if (projectsRef.current) observer.observe(projectsRef.current);
    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);
  return (
    <>
      <div className="w-full h-fit  p-2" ref={projectsRef}>
        <span className="min25pxMax35px  font-semibold text-gray-100   flex gap-2 items-center">
          <h5>Work experience</h5>
          <i className="fas fa-briefcase"></i>
        </span>
        <div className="flex mt-5 gap-10 items-center text-gray-100">
          <span className="flex  flex-col min18pxMax24">
            <h5 className="  font-semibold">1+ years</h5>
            <h5 className="font-medium -mt-2">hands on experience</h5>
          </span>
          <span className="flex  flex-col min18pxMax24">
            <h5 className="  font-semibold">10+</h5>
            <h5 className="font-medium -mt-2">full-stack projects</h5>
          </span>
        </div>
        {/** */}
        <div className="w-full min16pxMax19px h-fit mt-5 text-gray-100">
          <h5 className="min16pxMax19px font-semibold">
            Abuja, Nigeria | 2026 - Present
          </h5>
          <ul className="mt-2 ml-6 mr-3 list-disc flex flex-col gap-3 min16pxMax19px font-medium text-gray-100">
            <li>
              1+ years hands on experience building end-to-end web applications
              as full-stack developer
            </li>
            <li>
              Delivered 10+ full-stack projects including a real-time chat app
              and e-commerce platform with WhatsApp checkout integration
            </li>
            <li>
              Currently architecting D'Rahim Tech Innovation from ground up:
              pixel-perfect, saclable web app matching UI/UX designs from 2
              designers
            </li>
            <li>
              Tech stack: Modern React frontend + low-latency, security-tight
              express backend API + fast database queries
            </li>
            <li>
              Features shipped: In-app chat, community, live notifications,
              video calls, admin dashboard, integrated payment methods
            </li>
          </ul>
          <h5 className="min16pxMax19px font-semibold">
            Focus: Clean architecture, performance, security, and scalable code
            from day 1
          </h5>
        </div>
        {/** */}
        <div className="mt-10">
          <span className="min25pxMax35px  font-semibold text-gray-100   flex gap-2 items-center">
            <h5>Current Project</h5>
            <i className="fas fa-gears"></i>
          </span>
          {/**gallary */}
          <div className="flex flex-col gap-2 max-w-262.5">
            <span className="flex flex-wrap items-center gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">D'Rahim Tech Innovation: </h5>
              <h5 className="font-medium ">
                Full-stack Developer | Lead Engineer
              </h5>
            </span>
            <span className="flex flex-col  gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Overview: </h5>
              <span>
                <h5 className="font-medium ">
                  <strong>D'Rahim Tech Innovation</strong> is a software company
                  that trains UI/UX designers and builds scalable websites for
                  clients.
                </h5>
                <h5 className="font-medium ">
                  I worked with 2 UI/UX designers to take it from Figma to
                  production building end-to-end datastructures.
                </h5>
              </span>
            </span>
            <span className="flex flex-wrap items-center gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Stack: </h5>
              <h5 className="font-medium ">
                MongoDB, Postgres, Nodejs, Express, TypeScript, Tailwind CSS,
                React, Socket.Io, Nodemailer, Paystack, Redis
              </h5>
            </span>
            <span className="flex flex-col  gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Feaures: </h5>
              <ul className="list-disc ml-5 font-medium flex-col gap-2">
                <li>Client onboarding + dashboard for design services</li>
                <li>Real-time chat/notifications with Socket.Io</li>
                <li>Email validation + automated outreach via Nodemailer</li>
                <li>CMS to manage services, portfolio, and client requsts</li>
              </ul>
            </span>
          </div>
          <div className="w-fit h-fit mt-4 relative ml-2 mr-2">
            <span
              className="p-4 ml-4 pt-4.5 pb-4.5 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={preView}
            >
              <i className="fa fa-angle-left min25pxMax35px text-gray-100 "></i>
            </span>
            <img
              className="w-full h-fit min-h-75 max-h-162.5  max-w-250"
              src={imageUrl}
            ></img>
            <span
              className="p-4 mr-4 pt-4.5 pb-4.5 right-0 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={next}
            >
              <i className="fa fa-angle-right min25pxMax35px text-gray-100 "></i>
            </span>
          </div>
          {/**live link */}
          <span className="flex gap-2 mt-4 items-center">
            <h5 className="min16pxMax19px font-semibold text-gray-100">
              Live link
            </h5>
            <a
              className="text-blue-500 line-clamp-1 border-b-blue-500 border-b min16pxMax19px font-semibold"
              href="http://localhost:5174/D-Rahim/"
              target="_blank"
            >
              http://D-Rahim.company
            </a>
          </span>
          {/**github repo link */}
          <span className="flex gap-2 mt-2 items-center">
            <h5 className="min16pxMax19px font-semibold text-gray-100">
              Github
            </h5>
            <a
              className="text-blue-500 line-clamp-1 border-b-blue-500 border-b min16pxMax19px font-semibold"
              href="http://localhost:5174/D-Rahim/"
              target="_blank"
            >
              http://github.com/D-Rahim-art/D-rahim
            </a>
          </span>
        </div>
        {/** */}
        <div className="mt-10">
          <span className="min25pxMax35px  font-semibold text-gray-100   flex gap-2 items-center">
            <h5>Previous Projects</h5>
            <i className="fas fa-gears"></i>
          </span>
          {/**gallary */}
          <div className="flex flex-col gap-2 max-w-262.5">
            <span className="flex flex-wrap items-center gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">E-commerce Store Demo: </h5>
              <h5 className="font-medium ">Front-End Developer</h5>
            </span>
            <span className="flex flex-col gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Overview: </h5>
              <span>
                <h5 className="font-medium ">
                  A demo storefront built for a client to visualize how their
                  actual store would work.
                </h5>
                <h5 className="font-medium ">
                  All data is mocked and runs 100% on the front end to show flow
                  + UX
                </h5>
              </span>
            </span>
            <span className="flex flex-wrap items-center gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Stack: </h5>
              <h5 className="font-medium ">Tailwind Css, React, JavaScript</h5>
            </span>
            <span className="flex flex-col  gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Feaures: </h5>
              <ul className="list-disc ml-5 font-medium flex-col gap-2">
                <li>Product listing, filters, and cart functionality</li>
                <li>Mock checkout flow integrated with whatsApp for orders</li>
                <li>Fully responsive mobile-first UI</li>
              </ul>
            </span>
            <span className="flex flex-wrap items-center gap-1 min16pxMax19px font-semibold text-gray-100">
              <h5 className="font-bold mr-1">Note: </h5>
              <h5 className="font-medium ">
                No backend. Uses mock data to demonstrate UI/UXand checkout
                logic only
              </h5>
            </span>
          </div>
          <div className="w-fit h-fit mt-4 relative ml-2 mr-2">
            <span
              className="p-4 ml-4 pt-4.5 pb-4.5 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={preView2}
            >
              <i className="fa fa-angle-left min25pxMax35px text-gray-100 "></i>
            </span>
            <img
              className="w-full h-fit min-h-75 max-h-162.5  max-w-250"
              src={imageUrl2}
            ></img>
            <span
              className="p-4 mr-4 pt-4.5 pb-4.5 right-0 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={next2}
            >
              <i className="fa fa-angle-right min25pxMax35px text-gray-100 "></i>
            </span>
          </div>
          {/**live link */}
          <span className="flex gap-2 mt-4 items-center">
            <h5 className="min16pxMax19px font-semibold text-gray-100">
              Live link
            </h5>
            <a
              className="text-blue-500 line-clamp-1 border-b-blue-500 border-b min16pxMax19px font-semibold"
              href="http://localhost:5174/D-Rahim/"
              target="_blank"
            >
              http://nwanoruovictory87-web.git.io/Electronics-store
            </a>
          </span>
          {/**github repo link */}
          <span className="flex gap-2 mt-2 items-center">
            <h5 className="min16pxMax19px font-semibold text-gray-100">
              Github
            </h5>
            <a
              className="text-blue-500 line-clamp-1 border-b-blue-500 border-b min16pxMax19px font-semibold"
              href="http://localhost:5174/D-Rahim/"
              target="_blank"
            >
              http://github.com/nwanoruovictory87-web/Electronics-store
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Projects;
