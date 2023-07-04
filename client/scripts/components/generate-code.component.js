import { Component } from "./component.js";
import { PickParcelComponent } from "./pick-parcel.component.js";

export class GenerateCode extends Component {
  template() {
    return `
      <section class="generate-code">
        <div class="row">
          <div class="generate-code-details">
            <h2>Generuj QR dla:</h2>

            <ul>
              <li>
                <button class="link-button">Odbioru</button>
              </li>
              <li>
                <button class="link-button">Zwrotu</button>
              </li>
            </ul>

            <label>
              <span class="code-input-label">Kod odbioru</span>
              <input class="code-input" type="text" value="12345" />
            </label>

            <p class="error-message">Błędny kod odbioru</p>

            <button>Odbierz</button>
          </div>

          <img src="images/qr-code.svg" alt="QR Code">
        </div>
      </section>
      `;
  }

  render($target) {
    super.render($target);
    const c = new PickParcelComponent();
    c.render(this.$el);
  }
}
