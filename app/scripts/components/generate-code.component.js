import { Component } from "./component.js";

export class GenerateCode extends Component {
  template() {
    return `
      <section>
        <h2>Generuj QR dla:</h2>

        <ul>
          <li>
            <button>Odbioru</button>
          </li>
          <li>
            <button>Zwrotu</button>
          </li>
        </ul>

        <label for="">
          Kod odbioru
          <input type="text" disabled />
        </label>

        <button>Odbierz</button>
      </section>
      `;
  }
}
