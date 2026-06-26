import { useState } from "react";
function Projects() {
  const imageList = [
    "/images/D-rahim-tech1.jpg",
    "/images/D-rahim-tech-2.jpg",
    "/images/D-rahim-tech3.jpg",
  ];
  const [count, setCount] = useState(0);
  const imageUrl = imageList[count];
  const maxImage = 2;
  console.log(count);
  function next() {
    if (count === maxImage) return;
    setCount((prevCount) => (prevCount += 1));
  }
  function preView() {
    if (count === 0) return;
    setCount((prevCount) => (prevCount -= 1));
  }
  return (
    <>
      <div className="w-full h-fit  p-2">
        <span className="min25pxMax35px  font-semibold text-gray-200   flex gap-2 items-center">
          <h5>Work experience</h5>
          <i className="fas fa-briefcase"></i>
        </span>
        <div className="flex mt-5 gap-10 items-center text-gray-200">
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
        <div className="w-full min16pxMax19px h-fit mt-5 text-gray-200">
          <h5 className="min16pxMax19px font-semibold">
            Abuja, Nigeria | 2026 - Present
          </h5>
          <ul className="mt-2 ml-6 mr-3 list-disc flex flex-col gap-3 min16pxMax19px font-medium text-gray-200">
            <li>
              1+ years hands on experience building end-to-end web applications
              as solo full-stack developer
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
        <div className="mt-10">
          <span className="min25pxMax35px  font-semibold text-gray-200   flex gap-2 items-center">
            <h5>Current Projects</h5>
            <i className="fas fa-gears"></i>
          </span>
          {/**gallary */}
          <span>
            <h5 className="min16pxMax19px font-semibold text-gray-200">
              Full-stack dev at <strong>D'Rahim Tech Innovation</strong>
            </h5>
          </span>
          <div className="w-fit h-fit mt-4 relative ml-2 mr-2">
            <span
              className="p-4 ml-4 pt-4.5 pb-4.5 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={preView}
            >
              <i className="fa fa-angle-left min25pxMax35px text-gray-200 "></i>
            </span>
            <img
              className="w-full h-fit min-h-75 max-h-162.5  max-w-250"
              src={imageUrl}
            ></img>
            <span
              className="p-4 mr-4 pt-4.5 pb-4.5 right-0 bg-transparent-black rounded-full flex justify-center items-center w-fit absolute top-[40%] cursor-pointer"
              onClick={next}
            >
              <i className="fa fa-angle-right min25pxMax35px text-gray-200 "></i>
            </span>
          </div>
          {/**live link */}
          <span className="flex gap-2 mt-4 items-center">
            <h5 className="min16pxMax19px font-semibold text-gray-200">
              Live link
            </h5>
            <a
              className="text-blue-500 border-b-blue-500 border-b min16pxMax19px font-semibold"
              href="http://localhost:5174/D-Rahim/"
            >
              http://D-Rahim.company
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Projects;
