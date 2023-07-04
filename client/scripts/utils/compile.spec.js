import "jsdom-global/register";
import { test, expect } from "vitest";
import { compile } from "./compile";

test("it should compile a text", () => {
  const template = "<p>hello world</p>";
  const dom = compile(template);
  expect(dom?.tagName.toLowerCase()).toEqual("p");
  expect(dom?.textContent).toEqual("hello world");
});

test("it should return only first element when we have two tags on root level", () => {
  const template = "<p>hello</p><p>world</p>";
  const dom = compile(template);
  expect(dom?.textContent).toEqual("hello");
});
