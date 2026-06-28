function SocailsMenu() {
  return (
    <div className="w-[50%] min-[800px]:block hidden min-[1130px]:hidden max-w-45  h-full right-0 absolute">
      <div className="bg-[#141414] flex flex-col gap-4 p-5 w-full text-gray-200 text-[20px] min-[500px]:rounded-2xl">
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
          <h5>linkedIn</h5>
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
export default SocailsMenu;
