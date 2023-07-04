import { test, expect, vi } from "vitest";
import { makeRequest } from "./makeRequest";

test("should make a HTTP call", async () => {
  const fetchSpy = vi
    .spyOn(global, "fetch")
    .mockResolvedValue(new Response("{}"));
  await makeRequest("http://example.org");
  expect(fetchSpy.mock.calls.length).toEqual(1);
  fetchSpy.mockRestore();
});
