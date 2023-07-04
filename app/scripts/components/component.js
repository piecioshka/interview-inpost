import { compile } from "../utils/compile.js";

export class Component {
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
}
