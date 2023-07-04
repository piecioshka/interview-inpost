/**
 * @typedef Options
 * @property {boolean} [silent]
 */

/**
 * @param {string} selector
 * @param {Element|null} parent
 * @param {Options} options
 * @returns {HTMLElement|null}
 */
export function $(selector, parent = document.body, options = {}) {
  if (!parent) {
    if (options.silent) return null;
    throw new Error("parent is not defined");
  }
  /**
   * @type {HTMLElement|null}
   */
  const $element = parent.querySelector(selector);
  if (!$element) {
    if (options.silent) return null;
    throw new Error("cannot find element with selector=" + selector);
  }
  return $element;
}
