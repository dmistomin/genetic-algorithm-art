import { chai, expect } from 'chai';

import Foo from '../src/js/Foo';
import Dispatcher from '../src/js/Dispatcher';

describe('an example test', () => {
  describe('#bar', () => {
    it('returns a string', () => {
      expect(new Foo().bar()).to.equal('ES2015 compilation works properly!');
    })
  })
})

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
    })
  })
});

