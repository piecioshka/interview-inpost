import { compile } from "../utils/compile.js";
import { EventEmitter } from "../utils/event-emitter.js";

export class Component extends EventEmitter {
  /**
   * @type {Element|null}
   */
  $el = null;

  template() {
    return "";
  }

  render($target) {
    if (!$target) {
      throw new Error("target is not defined");
    }
    this.$el = compile(this.template());
    if (!this.$el) {
      throw new Error("template is not defined");
    }
    $target.appendChild(this.$el);
  }

  unmount() {
    this.$el?.remove();
  }
}
