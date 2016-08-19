import Dispatcher from './Dispatcher';

let instance = null;

class AppDispatcher extends Dispatcher {
  constructor() {
    super();
    if (!instance) { instance = this; }
    return instance; // singleton object implementation
  }
}

export default AppDispatcher;
