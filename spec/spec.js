import { chai, expect } from 'chai';

import Foo from '../src/js/Foo';

describe('an example test', () => {
  describe('#bar', () => {
    it('returns a string', () => {
      expect(new Foo().bar()).to.equal('ES2015 compilation works properly!');
    })
  })
})

