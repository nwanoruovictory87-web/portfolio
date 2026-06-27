function Contact() {
  return (
    <div className="w-full h-100 pt-10  p-2" id="contact">
      <span className="min25pxMax35px  font-semibold text-gray-100   flex gap-2 items-center">
        <h5>Lets Work Together</h5>
        <i className="fas fa-handshake-angle"></i>
      </span>
      <span className="flex flex-col gap-1 min18pxMax24 mt-2 font-medium text-gray-100">
        <h5 className=" mr-1">
          Got a project, a startup idea, or just want to say hi?{" "}
        </h5>
        <h5 className=" ">
          I'm open to full-time roles, freelance work, and collaborations
        </h5>
      </span>
      <div className="min18pxMax24  max-w-300 font-meduim mt-6 text-gray-100 flex flex-col gap-3">
        <span className="flex gap-2 items-center">
          <a
            className="border-b border-b-green-700 "
            target="_blank"
            href="https://wa.me/2348066869429"
          >
            Message Me on WhatsApp
          </a>
          <i className="fa-brands fa-whatsapp text-green-500"></i>
        </span>
        <span className="flex gap-2 items-center">
          <a
            className="border-b border-b-green-700 "
            href="mailto:nwanoruovictory87@gmail.com"
          >
            Send an Email
          </a>
          <i className="fa fa-comment text-green-500"></i>
        </span>
        <span className="flex gap-3 flex-wrap mt-5 ">
          <span className="flex gap-2 cursor-pointer items-center">
            <i className="fa-brands fa-github text-gray-100"></i>
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
        </span>
      </div>
    </div>
  );
}
export default Contact;
