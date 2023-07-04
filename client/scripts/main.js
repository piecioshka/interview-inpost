import { GenerateCode } from "./components/generate-code.component.js";
import { YourCodeComponent } from "./components/your-code.component.js";

function main() {
  const $main = document.querySelector("main");

  const c1 = new YourCodeComponent();
  c1.render($main);

  const c = new GenerateCode();
  c.render($main);
}

window.addEventListener("DOMContentLoaded", main);
