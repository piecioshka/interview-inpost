import { Component } from "./component.js";

export class PickParcel extends Component {
  template() {
    return `
      <section class="pick-parcel">
        <h4>Jak odebrać przesyłkę</h4>
        <ul class="tabs">
          <li>Krok 1</li>
          <li>Krok 2</li>
          <li>Krok 3</li>
        </ul>
      </section>
      `;
  }
}
