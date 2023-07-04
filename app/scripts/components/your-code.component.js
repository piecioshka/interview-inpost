import { Component } from "./component.js";

export class YourCodeComponent extends Component {
  template() {
    return `
    <section>
      <h2>Twój kod QR</h2>

      Data ważności: 2022-11-03 12:00 Multiskrytka
    </section>
    `;
  }
}
