import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Projects from "./components/Navigation/Projects";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="w-full overflow-hidden">
        <Home />
        <Projects />
      </div>
    </>
  );
}

export default App;
