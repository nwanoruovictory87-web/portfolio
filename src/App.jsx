import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Navigation/Projects";
import AboutMe from "./components/Navigation/AboutMe";
import Footer from "./components/Footer";
import Contact from "./components/Navigation/Contact";
function App() {
  return (
    <>
      <NavigationBar />
      <div className="w-full overflow-hidden backdrop-blur-[5px]">
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
