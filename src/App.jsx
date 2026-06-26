import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Navigation/Projects";
import AboutMe from "./components/Navigation/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="w-full overflow-hidden">
        <Home />
        <div className="bg-transparent-black">
          <Projects />
          <AboutMe />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
