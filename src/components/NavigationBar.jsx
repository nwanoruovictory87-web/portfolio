import { useState, useRef } from "react";
import SocailsMenu from "./SocailsMenu";
import Menu from "./Menu";
function NavigationBar() {
  const [menuControl, setMenuControl] = useState(false);
  const [socailsMenuControl, setSocailsMenuControl] = useState(false);
  const menuRef = useRef(null);
  const socailsMenuRef = useRef(null);
  function menuControlFunc() {
    if (!menuRef.current) return;
    if (!menuControl) {
      menuRef.current.classList.remove("offSwicth");
      menuRef.current.classList.remove("animate-out");
      menuRef.current.classList.add("animate-in");
      setMenuControl(true);
    } else {
      menuRef.current.classList.remove("animate-in");
      menuRef.current.classList.add("animate-out");
      setMenuControl(false);
    }
  }
  function socailsMenuControlFunc() {
    if (!socailsMenuRef.current) return;
    if (!socailsMenuControl) {
      socailsMenuRef.current.classList.remove("offSwicth");
      socailsMenuRef.current.classList.remove("animate-out");
      socailsMenuRef.current.classList.add("animate-in");
      setSocailsMenuControl(true);
    } else {
      socailsMenuRef.current.classList.remove("animate-in");
      socailsMenuRef.current.classList.add("animate-out");
      setSocailsMenuControl(false);
    }
  }
  return (
    <div className=" sticky top-0 z-10">
      <div className="w-full  h-fit p-2 bg-transparent-black flex items-center">
        {/**brand name */}
        <div className="w-fit h-fit  ml-2.5">
          <span className="w-fit flex items-center gap-2 text-[18px] font-semibold text-gray-200  font-sans">
            <span className="min-[1000px]:hidden block">
              <h5 className="text-pink-600">return</h5>
            </span>
            <span className="min-[1000px]:flex items-center gap-0.5 hidden ">
              <h5>
                devs.<strong className="text-green-600">filter</strong>
              </h5>
              <h5 className="text-green-600">{"("}</h5>
              <h5 className="text-pink-600">{"("}</h5>
              <h5 className="text-blue-600">d</h5>
              <h5 className="text-pink-600">{")"}</h5>
              <h5>{"=>"}</h5>
              <h5 className="text-blue-600">d</h5>
              <h5></h5>
              <h5 className="text-pink-600">==</h5>
            </span>
            <span className="flex gap-1">
              <h5>Victory</h5>
              <h5 className="hidden min-[300px]:block">Nwanoruo</h5>
              <h5 className="text-green-600 -ml-1 hidden min-[1000px]:block">
                {")"}
              </h5>
              <h5 className=" -ml-1 block min-[1000px]:hidden">{";"}</h5>
            </span>
          </span>
        </div>
        {/**naviagation */}
        <div className="ml-auto">
          {/**menu bar */}
          <span className="text-gray-200 text-2xl block min-[800px]:hidden transition-all">
            <i
              className="fa fa-bars cursor-pointer"
              onClick={menuControlFunc}
            ></i>
          </span>
          {/**pc view */}
          <div className=" hidden min-[800px]:flex w-fit h-fit  gap-7 min-[850px]:gap-10 text-gray-200 font-sans min18pxMax24 items-center transition-all">
            <span className=" text-[#0505a0] cursor-pointer">
              <h5>Home</h5>
            </span>
            <span className="  cursor-pointer">
              <h5>Projects</h5>
            </span>
            <span className="  cursor-pointer">
              <h5>Resume</h5>
            </span>
            <span className="  cursor-pointer">
              <h5>About</h5>
            </span>
          </div>
        </div>
        {/**socials */}
        <div className="ml-0 min-[800px]:ml-auto mr-0 min-[800px]:mr-2.5 transition-all">
          {/**menu bar */}
          <span
            className="hidden min-[800px]:block  min-[1130px]:hidden  text-2xl text-gray-200 transition-all"
            onClick={socailsMenuControlFunc}
          >
            <i className="fas fa-globe cursor-pointer"></i>
          </span>
          {/**pc view */}
          <div className=" hidden w-0 h-0 min-[1130px]:fit min-[1130px]:w-fit  min-[1130px]:flex gap-5 font-sans text-[24px] items-center transition-all">
            <span className="cursor-none min-[1130px]:cursor-pointer">
              <i className="fa-brands fa-github text-gray-200"></i>
            </span>
            <span className="cursor-none min-[1130px]:cursor-pointer">
              <i className="fa-brands fa-linkedin text-blue-400"></i>
            </span>
            <span className="cursor-none min-[1130px]:cursor-pointer">
              <i className="fa-brands fa-youtube text-red-600"></i>
            </span>
            <span className="cursor-none min-[1130px]:cursor-pointer">
              <i className="fa-brands fa-facebook text-blue-600"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <div className="offSwicth" ref={menuRef}>
          <Menu />
        </div>
        <div className="offSwicth" ref={socailsMenuRef}>
          <SocailsMenu />
        </div>
      </div>
    </div>
  );
}
export default NavigationBar;
