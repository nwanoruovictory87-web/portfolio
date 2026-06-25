import Home from "./components/Home";
import codingGif from "/images/coding.gif";
function App() {
  return (
    <div
      className="image-body"
      style={{
        backgroundImage: `url('/images/coding.gif')`,
      }}
    >
      <Home />
    </div>
  );
}

export default App;
