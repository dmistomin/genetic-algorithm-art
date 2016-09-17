import { chai, expect } from 'chai';

import Dispatcher from '../src/js/Dispatcher';
import AppDispatcher from '../src/js/AppDispatcher';
import Store from '../src/js/Store';

describe('Dispatcher', () => {

  describe('#register', () => {
    const dispatcher = new Dispatcher();

    it('returns correct id', () => {
      const firstId = dispatcher.register(() => { return 'first'; });
      expect(firstId).to.equal(0);
      const secondId = dispatcher.register(() => { return 'second'; });
      expect(secondId).to.equal(1);
    });
  });

  describe('#unregister', () => {
    const dispatcher = new Dispatcher();
    let data = {};

    it('deletes a callback', () => {
      const id = dispatcher.register((obj) => {
        obj.text = 'working!';
      });
      dispatcher.dispatch(data);
      expect(data.text).to.equal('working!');
      dispatcher.unregister(id);
      data = {};
      dispatcher.dispatch(data);
      expect(data.text).to.equal(undefined);
    });
  });

  describe('#dispatch', () => {
    const dispatcher = new Dispatcher();
    let data = {};

    it('runs the callbacks when dispatch is called', () => {
      const firstId = dispatcher.register((obj) => {obj.a = 'a'; });
      const secondId = dispatcher.register((obj) => {obj.b = 'b'; });
      dispatcher.dispatch(data);
      expect(data.a).to.eq('a');
      expect(data.b).to.eq('b');
    });
  });
});

describe('Store', () => {
  const data = {};
  const dispatcher = new AppDispatcher();
  const store = new Store();

  let id = store.addListener((payload) => {
    switch(payload.type) {
      case 'TEST_ONE':
        data.a = 1;
        break;
    }
  });

  describe('#addListener', () => {
    it('creates a listener that fires when dispatcher is invoked', () => {

      dispatcher.dispatch({type: 'TEST_ONE'});
      expect(data.a).to.eq(1);
    });
  });

  describe('#removeListener', () => {
    it('removes the listener', () => {
      store.removeListener(id);
      data.a = 'foo';
      dispatcher.dispatch({type: 'TEST_ONE'});
      expect(data.a).to.eq('foo');
    });
  });
});

