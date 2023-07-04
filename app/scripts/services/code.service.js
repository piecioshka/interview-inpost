import { makeRequest } from "../utils/makeRequest";
import {
  generateCollectionCodeUrl,
  generateReturnCodeUrl,
} from "../configs/urls";

export function generateCollectionCode() {
  return makeRequest(generateCollectionCodeUrl);
}

export function generateReturnCode() {
  return makeRequest(generateReturnCodeUrl);
}
