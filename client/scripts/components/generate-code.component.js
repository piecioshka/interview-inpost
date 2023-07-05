import { Component } from "./component.js";
import { $ } from "../utils/dom.js";
import {
  generateCollectionCode,
  generateReturnCode,
} from "../services/code.service.js";
import i18n from "../i18n/index.js";
import { defaultTab, SUPPORTED_TABS } from "../configs/app.js";

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
                  <input class="code-input" type="text" name="code" placeholder="Example: 12345" />
                </label>

                <p class="error-message"></p>

                <button>Odbierz</button>
              </form>

              <form class="generate-return-code-form">
                <label>
                  <span class="code-input-label">Kod zwrotu</span>
                  <input class="code-input" type="text" name="code" placeholder="Example: 123456" />
                </label>

                <p class="error-message"></p>

                <button>Zwróć</button>
              </form>
            </div>
          </div>

          <img class="qr-code" src="images/qr-code-dummy.svg" alt="Dummy QR Code">
        </div>
      </section>
      `;
  }

  render($target) {
    super.render($target);

    this._selectTab(defaultTab);
    this._setupTabs();
    this._setupSubmitForms();
  }

  _setupSubmitForms() {
    const collectionForm = $(".generate-collection-code-form", this.$el);
    const returnForm = $(".generate-return-code-form", this.$el);

    this._setupForm(collectionForm, async ({ code }) => {
      try {
        const response = await generateCollectionCode({ code });
        if (response.key) {
          this._displayError(
            collectionForm,
            response.msg ?? i18n.NETWORK_ERROR
          );
          return;
        }
        this.emit("generated", { type: "collection", ...response });
      } catch (err) {
        this._displayError(collectionForm, i18n.NETWORK_ERROR);
      }
    });

    this._setupForm(returnForm, async ({ code }) => {
      try {
        const response = await generateReturnCode({ code });
        if (response.key) {
          this._displayError(returnForm, response.msg ?? i18n.NETWORK_ERROR);
          return;
        }
        this.emit("generated", { type: "collection", ...response });
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
      callback({ code });
    });
  }

  _setupTabs() {
    const tabs = $(".tabs", this.$el);
    tabs?.addEventListener("click", (evt) => {
      if (evt.target.nodeName.toLowerCase() === "button") {
        this._selectTab(evt.target.dataset.type);
      }
    });
  }

  _selectTab(type) {
    if (!SUPPORTED_TABS.includes(type)) {
      throw new Error(`unsupported tab=${type}`);
    }
    const tabs = $(".tabs", this.$el);
    $(".active", tabs, { silent: true })?.classList.remove("active");
    $(`[data-type=${type}]`, tabs)?.classList.add("active");

    const tabsContent = $(".tabs-content", this.$el);
    $(".active", tabsContent, { silent: true })?.classList.remove("active");
    $(`.generate-${type}-code-form`, tabsContent)?.classList.add("active");
  }

  _displayError(form, text) {
    const container = $(".error-message", form);
    container.textContent = text;
  }
}
