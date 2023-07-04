import { Component } from "./component.js";
import { PickParcelComponent } from "./pick-parcel.component.js";

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

  render($target) {
    super.render($target);
    const c = new PickParcelComponent();
    c.render(this.$el);
  }
}
