import { Component } from "./component.js";

export class PickParcelComponent extends Component {
  template() {
    return `
      <section>
        <h4>Jak odebrać przesyłkę</h4>
        <ul>
          <li>Krok 1</li>
          <li>Krok 2</li>
          <li>Krok 3</li>
        </ul>
      </section>
      `;
  }
}
