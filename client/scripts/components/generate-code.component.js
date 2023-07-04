import { Component } from "./component.js";
import { PickParcelComponent } from "./pick-parcel.component.js";
import { $ } from "../utils/dom.js";
import {
  generateCollectionCode,
  generateReturnCode,
} from "../services/code.service.js";
import i18n from "../i18n/index.js";

export class GenerateCode extends Component {
  template() {
    return `
      <section class="generate-code">
        <div class="row">
          <div class="generate-code-details">
            <h2>Generuj QR dla:</h2>

            <ul class="tabs">
              <li>
                <button class="link-button" data-type="collection">Odbioru</button>
              </li>
              <li>
                <button class="link-button" data-type="return">Zwrotu</button>
              </li>
            </ul>

            <div class="tabs-content">
              <form class="generate-collection-code-form">
                <label>
                  <span class="code-input-label">Kod odbioru</span>
                  <input class="code-input" type="text" name="code" value="12345" />
                </label>

                <p class="error-message"></p>

                <button>Odbierz</button>
              </form>

              <form class="generate-return-code-form">
                <label>
                  <span class="code-input-label">Kod zwrotu</span>
                  <input class="code-input" type="text" name="code" value="123456" />
                </label>

                <p class="error-message"></p>

                <button>Zwróć</button>
              </form>
            </div>
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

    this._selectTab("collection");
    this._setupTabs();
    this._setupSubmitForms();
  }

  _setupSubmitForms() {
    const collectionForm = $(".generate-collection-code-form", this.$el);
    const returnForm = $(".generate-return-code-form", this.$el);

    this._setupForm(collectionForm, async ({ code }) => {
      try {
        const response = await generateCollectionCode({ code });
        console.debug("piecioshka", response);
      } catch (err) {
        this._displayError(collectionForm, i18n.NETWORK_ERROR);
      }
    });

    this._setupForm(returnForm, async ({ code }) => {
      try {
        const response = await generateReturnCode({ code });
        console.debug("piecioshka", response);
      } catch (err) {
        this._displayError(returnForm, i18n.NETWORK_ERROR);
      }
    });
  }

  _setupForm(form, callback) {
    form?.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const data = new FormData(this);
      const fields = new Map(data);
      const code = fields.get("code");
      console.debug("piecioshka", { code });
      callback({ code });
    });
  }

  _setupTabs() {
    const tabs = this.$el?.querySelector(".tabs");
    tabs?.addEventListener("click", (evt) => {
      this._selectTab(evt.target.dataset.type);
    });
  }

  _selectTab(type) {
    const tabs = this.$el?.querySelector(".tabs");
    tabs?.querySelector(".active")?.classList.remove("active");
    tabs?.querySelector(`[data-type=${type}]`)?.classList.add("active");

    const tabsContent = this.$el?.querySelector(".tabs-content");
    tabsContent?.querySelector(".active")?.classList.remove("active");
    tabsContent
      ?.querySelector(`.generate-${type}-code-form`)
      ?.classList.add("active");
  }

  _displayError(form, text) {
    const container = $(".error-message", form);
    container.textContent = text;
  }
}
