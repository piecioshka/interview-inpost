import { Component } from "./component.js";
import { PickParcelComponent } from "./pick-parcel.component.js";

export class YourCodeComponent extends Component {
  template() {
    return `
    <section class="your-code">
      <h2>Twój kod QR</h2>

      <div class="row">
        <img src="images/qr-code.svg" alt="QR Code">

        <div class="your-code-details">
          <p>
            Data ważności:
            <time>2022-11-03 12:00</time>
            <span class="multi-parcel-badge">Multiskrytka</span>
          </p>
        </div>
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
