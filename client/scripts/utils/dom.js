/**
 * @param {string} selector
 * @param {Element|null} parent
 * @returns {HTMLElement}
 */
export const $ = (selector, parent = document.body) => {
  if (!parent) {
    throw new Error("parent is not defined");
  }
  /**
   * @type {HTMLElement|null}
   */
  const $element = parent.querySelector(selector);
  if (!$element) {
    throw new Error("cannot find element with selector=" + selector);
  }
  return $element;
};
