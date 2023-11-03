import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
      <BrowserRouter>
      </BrowserRouter>
      , document.querySelector("#weather")

  </StrictMode>
);
