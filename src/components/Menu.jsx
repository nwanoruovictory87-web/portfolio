function Menu() {
  return (
    <div className="w-[50%] min-[800px]:hidden max-w-69.25 h-full right-0 absolute">
      <div className="bg-black flex flex-col gap-4 p-5 w-full text-gray-200 text-[24px] min-[500px]:rounded-2xl">
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
        <span className="  cursor-pointer">
          <h5>Contact</h5>
        </span>
        {/**socials */}
        <span className="flex gap-2 cursor-pointer items-center ">
          <i className="fa-brands fa-github text-gray-200"></i>
          <h5>github</h5>
        </span>
        <span className="flex gap-2 cursor-pointer items-center">
          <i className="fa-brands fa-linkedin text-blue-400"></i>
          <h5>linkedin</h5>
        </span>
        <span className="flex gap-2 cursor-pointer items-center">
          <i className="fa-brands fa-youtube text-red-600"></i>
          <h5>youtube</h5>
        </span>
        <span className="flex gap-2 cursor-pointer items-center">
          <i className="fa-brands fa-facebook text-blue-600"></i>
          <h5>facebook</h5>
        </span>
      </div>
    </div>
  );
}
export default Menu;
