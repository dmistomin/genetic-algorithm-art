import AppDispatcher from './AppDispatcher';

const Store = (function () {
  // Private variables
  const _emitter = Symbol();

  class Store {
    constructor() {
      this[_emitter] = new AppDispatcher();
      this.addListener = this[_emitter].register.bind(this[_emitter]);
      this.removeListener = this[_emitter].unregister.bind(this[_emitter]);
    }
  }

  return Store;
})();

export default Store;
