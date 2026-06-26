import { useRef, useEffect } from "react";
import { ControlsContextApi } from "../ContextApi/Controls";
function Contact() {
  const controls = ControlsContextApi();
  const { setContactInview } = controls;
  const contactRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          setContactInview(true);
        } else {
          setContactInview(false);
        }
      },
      { threshold: 0.5 },
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);
  return (
    <div className="w-full h-100 pt-30  p-2" id="contact" ref={contactRef}>
      <span className="min25pxMax35px  font-semibold text-gray-200   flex gap-2 items-center">
        <h5>About Me</h5>
        <i className="fas fa-user-tie"></i>
      </span>
      <div className="min18pxMax24 max-w-300 font-meduim mt-3 text-gray-200 flex flex-col gap-3"></div>
    </div>
  );
}
export default Contact;
