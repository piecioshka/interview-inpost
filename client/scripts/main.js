import { GenerateCode } from "./components/generate-code.component.js";

function main() {
  const $main = document.querySelector("main");

  const c = new GenerateCode();
  c.render($main);
}

window.addEventListener("DOMContentLoaded", main);
