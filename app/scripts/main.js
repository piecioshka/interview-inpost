import { PickParcelComponent } from "./components/pick-parcel.component.js";

function main() {
  const c = new PickParcelComponent();
  c.render();
}

window.addEventListener("DOMContentLoaded", main);
