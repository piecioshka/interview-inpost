export class EventEmitter {
  #listeners = [];

  on(eventName, callback) {
    if (!this.#listeners[eventName]) {
      this.#listeners[eventName] = [];
    }
    this.#listeners[eventName].push(callback);
  }

  off(eventName) {
    delete this.#listeners[eventName];
  }

  emit(eventName, payload) {
    this.#listeners[eventName]?.forEach((callback) => callback(payload));
  }
}
