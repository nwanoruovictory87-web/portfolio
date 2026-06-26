function Projects() {
  return (
    <div className="w-full h-fit mt-10 bg-transparent-black p-2">
      <span className="min25pxMax35px  font-semibold text-gray-200   flex gap-2 items-center">
        <h5>Work experience</h5>
        <i className="fas fa-briefcase"></i>
      </span>
      <div className="flex mt-5 gap-10 items-center text-gray-200">
        <span className="flex  flex-col min18pxMax24">
          <h5 className="  font-semibold">1+ years</h5>
          <h5 className="font-medium -mt-2">experience</h5>
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
            1+ years experience building end-to-end web applications as solo
            full-stack developer
          </li>
          <li>
            Delivered 10+ full-stack projects including a real-time chat app and
            e-commerce platform with WhatsApp checkout integration
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
            Features shipped: In-app chat, community, live notifications, video
            calls, admin dashboard, integrated payment methods
          </li>
        </ul>
        <h5 className="min16pxMax19px font-semibold">
          Focus: Clean architecture, performance, security, and scalable code
          from day 1
        </h5>
      </div>
    </div>
  );
}
export default Projects;
