import { Component } from "./component.js";

export class YourCode extends Component {
  parcel = null;

  template() {
    const qr = this.parcel.qrcode;
    const exp = this.parcel.expirationDate;
    const multi = this.parcel.multicompartment;
    const size = this.parcel.size;

    return `
    <section class="your-code">
      <h2>Twój kod QR</h2>

      <div class="row">
        <img class="qr-code" src="${qr}" alt="QR Code">

        <div class="your-code-details">
          <p>
            Data ważności:
            <time>${exp}</time>
            ${
              multi
                ? '<span class="multi-parcel-badge">Multiskrytka</span>'
                : ""
            }
            ${
              size
                ? `<span class="multi-parcel-badge">Rozmiar: ${size}</span>`
                : ""
            }
          </p>
        </div>
      </div>
    </section>
    `;
  }

  render($target) {
    super.render($target);
  }
}
