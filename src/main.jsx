import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ControlsContextProvider } from "./components/ContextApi/Controls.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ControlsContextProvider>
      <App />
    </ControlsContextProvider>
  </StrictMode>,
);
