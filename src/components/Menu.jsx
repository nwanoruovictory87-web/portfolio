function Menu() {
  return (
    <div className="w-[50%] h-full right-0 absolute">
      <div className="bg-black flex flex-col gap-4 p-5 w-full text-gray-200 text-[24px]">
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
      </div>
    </div>
  );
}
export default Menu;
