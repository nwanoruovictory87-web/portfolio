import meImg from "/images/me.jpeg";
function AboutMe() {
  return (
    <div className="w-full h-fit pt-20  p-2" id="about">
      <span className="">
        <img
          className="w-40 h-40 min-[500px]:w-60 min-[500px]:h-60 rounded-full"
          src={meImg}
        ></img>
      </span>
      <span className="min25pxMax35px  font-semibold text-gray-200   flex gap-2 items-center">
        <h5>About Me</h5>
        <i className="fas fa-user-tie"></i>
      </span>
      <div className="min18pxMax24 font-meduim mt-3 text-gray-200 flex flex-col gap-3">
        <h5>
          I'm a full-stack developer focused on building fast, secure, scalable
          web apps
        </h5>
        <h5>
          Over the past year i've gone from just coding to shipping: 10+
          production projects building and maintaining end-to-end systems
        </h5>
        <h5>
          Currently leading dev for <strong>D'Rahim Tech Innovation</strong> -
          working with UI/UX designers to deliver pixel-perfect, functional
          products with real-time features + payments
        </h5>
      </div>
    </div>
  );
}
export default AboutMe;
