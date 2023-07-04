import { makeRequest } from "../utils/makeRequest.js";
import {
  generateCollectionCodeUrl,
  generateReturnCodeUrl,
} from "../configs/urls.js";

/**
 * @param {Record<string,unknown>} payload
 * @returns {RequestInit}
 */
function buildJSONOptions(payload) {
  return {
    method: "post",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  };
}

export function generateCollectionCode(payload) {
  return makeRequest(generateCollectionCodeUrl, buildJSONOptions(payload));
}

export function generateReturnCode(payload) {
  return makeRequest(generateReturnCodeUrl, buildJSONOptions(payload));
}
