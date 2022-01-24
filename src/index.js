import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorContextProvider } from "./store/color-context";
import { GameContextProvider } from "./store/game-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ColorContextProvider>
      <GameContextProvider>
        <App />
      </GameContextProvider>
    </ColorContextProvider>
  </StrictMode>,
  rootElement
);
