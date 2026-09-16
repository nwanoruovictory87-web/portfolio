import NavigationBar from "./shared/NavigationBar";
import Home from "./features/Home";
import Projects from "./features/Projects";
import AboutMe from "./features/AboutMe";
import Footer from "./shared/Footer";
import Contact from "./features/Contact";
function App() {
  return (
    <>
      <NavigationBar />
      <div className="w-full overflow-hidden backdrop-blur-[7px]">
        <Home />
        <div className="min-h-20 bg-transparent w-full" id="projects"></div>
        <div className="bg-transparent-black">
          <Projects />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
