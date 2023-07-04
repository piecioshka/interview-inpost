/**
 * @param {string} text
 * @returns {Element|null}
 */
export function compile(text) {
  const parser = new window.DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  return doc.body.firstElementChild;
}
