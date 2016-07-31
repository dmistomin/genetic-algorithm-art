const Dispatcher = (function () {
  // Private variables
  const _id = Symbol();
  const _callbacks = Symbol();

  class Dispatcher {
    constructor() {
      this[_id] = 0;
      this[_callbacks] = [];
    }

    register(callback) {
      this[_callbacks].push(callback);
      return this[_id]++;
    }

    unregister(id) {
      this[_callbacks][id] = null;
    }

    dispatch(payload) {
      for(let callback of this[_callbacks]) {
        if(callback) { callback(payload); }
      }
    }
  }

  return Dispatcher;
})();

export default Dispatcher;
