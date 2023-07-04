import { test, expect } from "vitest";
import { EventEmitter } from "./event-emitter";

test("should can register an event", () => {
  let invoked = false;
  const ee = new EventEmitter();
  ee.on("foo", () => {
    invoked = true;
  });
  ee.emit("foo");
  expect(invoked).toEqual(true);
});

test("should can unregister an event", () => {
  let invoked = false;
  const ee = new EventEmitter();
  ee.on("foo", () => {
    invoked = true;
  });
  ee.off('foo');
  ee.emit("foo");
  expect(invoked).toEqual(false);
});
