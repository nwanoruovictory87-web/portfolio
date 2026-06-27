import jsStack from "/images/js_stack.png";
import reactJsStack from "/images/react_stack.jpeg";
import git from "/images/git_stack.jpeg";
import mogodb from "/images/mogodb_stack.jpeg";
import postgresql from "/images/postgresql_stack.jpeg";
import redis from "/images/redis_stack.png";
import socketIo from "/images/socket.io_stack.jpeg";
import restApi from "/images/restApi_stack.png";
import tailwind from "/images/tailwind_stack.jpeg";
import typescript from "/images/typescript_stack.png";
import vanilaJs from "/images/vanilajs_stack.jpeg";
import nodeJs from "/images/nodejs_stack.png";
import datastructures from "/images/datastructures_algorithim_stack.jpeg";
import { useEffect, useState, useRef } from "react";
import { ControlsContextApi } from "./ContextApi/Controls";
function Home() {
  const controls = ControlsContextApi();
  const {
    setHomePage,
    setProjectsPage,
    setResumePage,
    setAboutPage,
    setContactPage,
  } = controls;
  function handleHomePage() {
    setContactPage(false);
    setAboutPage(false);
    setResumePage(false);
    setProjectsPage(false);
    setHomePage(true);
  }
  return (
    <>
      <div className="pt-40 w-full pb-10" id="home">
        <div className="p-2 w-full h-fit flex justify-center">
          <div>
            <span className="flex flex-col text-gray-100 font-sans">
              <h5 className="min25pxMax35px font-semibold">Hello!</h5>
              <h5 className="min25pxMax35px font-semibold -mt-2 ml-10">
                I'm Victory
              </h5>
              <h2 className="min30pxMax45px font-bold">
                A Full-Stack Web Developer
              </h2>
            </span>
            {/** */}
            <div className="w-fit flex mt-6 gap-10">
              <span
                className="flex w-fit h-fit min18pxMax24 bg-[#5f3f02] p-4 rounded-2xl font-medium text-gray-100 cursor-pointer"
                onClick={handleHomePage}
              >
                <a href="#projects">My Work</a>
              </span>
              <span className="flex w-fit h-fit min18pxMax24 bg-transparent-black p-4 rounded-2xl font-medium text-gray-100 cursor-pointer">
                <h5>Download CV</h5>
              </span>
            </div>
          </div>
        </div>
        {/**skills */}
        <div className="w-full rotate-4 -ml-1 h-fit overflow-hidden pb-5 mt-30 bg-transparent-black">
          <span className="pl-2 pr-2 flex gap-2 items-center text-gray-100">
            <h5 className="min25pxMax35px  font-semibold ">
              My Skills & Strong Areas
            </h5>
            <i className="fas fa-dumbbell min25pxMax35px"></i>
          </span>
          {/**stack */}
          <div className="w-full ">
            <div className="flex slideAnimation  whitespace-nowrap  mt-3 p-2 gap-10 items-center ">
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2  items-center">
                <img className="w-20 h-20 rounded-2xl" src={vanilaJs}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>VanilaJs</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={typescript}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Typescript</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={reactJsStack}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>ReactJS</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={tailwind}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Tailwindcss</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={git}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Git Version Control</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={jsStack}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>JavaScript</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={nodeJs}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>NodeJs</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={mogodb}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Mongodb(NoSQL)</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={postgresql}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Postgres(SQL)</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={socketIo}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Socket.Io</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={restApi}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Rest Api</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={redis}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Redis</h5>
                </span>
              </span>
              {/**stack */}
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2  items-center">
                <img
                  className="w-20 h-20 rounded-2xl"
                  src={datastructures}
                ></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Datastructures</h5>
                </span>
              </span>
              {/*duplicate*/}
              <span className="flex min-w-62.5 shrink-0 gap-2  items-center">
                <img className="w-20 h-20 rounded-2xl" src={vanilaJs}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>VanilaJs</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={typescript}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Typescript</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={reactJsStack}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>ReactJS</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={tailwind}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Tailwindcss</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={git}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Git Version Control</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={jsStack}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>JavaScript</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={nodeJs}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>NodeJs</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={mogodb}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Mongodb(NoSQL)</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={postgresql}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Postgres(SQL)</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={socketIo}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Socket.Io</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={restApi}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Rest Api</h5>
                </span>
              </span>
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2 items-center">
                <img className="w-20 h-20 rounded-2xl" src={redis}></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Redis</h5>
                </span>
              </span>
              {/**stack */}
              {/**stack */}
              <span className="flex min-w-62.5 shrink-0 gap-2  items-center">
                <img
                  className="w-20 h-20 rounded-2xl"
                  src={datastructures}
                ></img>
                <span className="text-gray-100 min18pxMax24">
                  <h5>Datastructures</h5>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
