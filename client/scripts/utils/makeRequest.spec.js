import { test, expect, vi } from "vitest";
import { makeRequest } from "./makeRequest";

test("should make a HTTP call", async () => {
  const fetchSpy = vi
    .spyOn(globalThis, "fetch")
    .mockResolvedValue(new Response("{}"));
  await makeRequest("http://example.org");
  expect(fetchSpy.mock.calls.length).toEqual(1);
  fetchSpy.mockRestore();
});

test("should support passing options", async () => {
  const fetchSpy = vi
    .spyOn(globalThis, "fetch")
    .mockResolvedValue(new Response("{}"));
  const options = {
    method: "post",
    data: JSON.stringify({ foo: "bar" }),
  };
  const url = "http://example.org";
  await makeRequest(url, options);
  expect(fetchSpy.mock.lastCall).toEqual([url, options]);
  fetchSpy.mockRestore();
});
