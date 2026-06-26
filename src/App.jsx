import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="w-full overflow-hidden">
        <Home />
      </div>
    </>
  );
}

export default App;
