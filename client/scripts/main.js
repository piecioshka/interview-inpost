import { GenerateCode } from "./components/generate-code.component.js";
import { YourCode } from "./components/your-code.component.js";
import { PickParcel } from "./components/pick-parcel.component.js";
import { $ } from "./utils/dom.js";

function main() {
  const $main = $("main");
  const $page = $("#page");

  const gc = new GenerateCode();
  gc.render($main);
  gc.on("generated", (payload) => {
    gc.unmount();
    const yc = new YourCode();
    yc.parcel = payload;
    yc.render($main);
  });

  const c = new PickParcel();
  c.render($page);
}

window.addEventListener("DOMContentLoaded", main);
