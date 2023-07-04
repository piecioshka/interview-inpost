import { makeRequest } from "../utils/makeRequest.js";
import {
  generateCollectionCodeUrl,
  generateReturnCodeUrl,
} from "../configs/urls.js";

export function generateCollectionCode(payload) {
  return makeRequest(generateCollectionCodeUrl, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  });
}

export function generateReturnCode(payload) {
  return makeRequest(generateReturnCodeUrl, {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  });
}
