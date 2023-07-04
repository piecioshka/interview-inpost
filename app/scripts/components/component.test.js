import "jsdom-global/register";
import { describe, it, expect, onTestFailed } from "vitest";
import { Component } from "./component";

describe("Component", () => {
  it("should be a class constructor", () => {
    const c = new Component();
    expect(1).toEqual(1);
  });

  it("should throw an error when template is not defined", () => {
    const container = document.createElement("div");
    const c = new Component();
    expect(() => c.render(container)).toThrowError("template is not defined");
  });

  it("should can a render in container", () => {
    const container = document.createElement("div");
    const c = new Component();
    c.template = () => `<q></q>`;
    c.render(container);
    expect(container.children.length).toBeGreaterThan(0);
  });

  it("should use template to render it", () => {
    const container = document.createElement("div");
    const c = new Component();
    c.template = () => `<div id="this-is-my-title">yo!</div>`;
    c.render(container);
    expect(container.children[0].tagName.toLowerCase()).toEqual("div");
    expect(container.textContent).toEqual("yo!");
  });

  it("should throw an error when target is not defined", () => {
    const c = new Component();
    c.template = () => "<div></div>";
    expect(() => c.render()).toThrowError("target is not defined");
  });

  it("should have possibility to render component inside another component", () => {
    const container = document.createElement("div");

    const c1 = new Component();
    c1.template = () => `<p></p>`;

    const cached = c1.render;
    c1.render = function (target) {
      cached.call(this, target);

      const c2 = new Component();
      c2.template = () => `<span></span>`;
      c2.render(this.$el);
    };

    c1.render(container);
  });
});
