import { app } from "./app";
import { useServiceElements } from "./services/serviceElements";

useServiceElements();

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  const appResult = app();
  root.innerHTML = appResult;
});
