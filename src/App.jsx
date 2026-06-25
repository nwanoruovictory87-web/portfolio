import Home from "./components/Home";
import codingGif from "/images/coding.gif";
function App() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url('/images/coding.gif')`,
        backgroundSize: "fit",
        minHeight: "100vh",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
