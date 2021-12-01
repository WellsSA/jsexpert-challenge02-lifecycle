const { describe, it, before } = require('mocha');

const { expect } = require('chai');

const ReferencesService = require('../../../src/service/ReferencesService');

describe('ReferencesService Suite Tests', () => {
  let service = {};

  before(() => {
    service = new ReferencesService();
  });

  it('should return a counter modifying the original instance (bad habit)', () => {
    const a = { counter: 0 };
    const b = service.getCounterCopyingReferences(a);

    b.counter++;

    expect(a.counter).to.be.eql(1);
    expect(b.counter).to.be.eql(1);
  });

  it('should return a counter not modifying the original instance (good habit)', () => {
    const a = { counter: 0 };
    const b = service.getCounterWithoutCopyingReferences(a);

    b.counter++;

    expect(a.counter).to.be.eql(0);
    expect(b.counter).to.be.eql(1);
  });

  it('should return a counter modifying the original instance (depth object side effect)', () => {
    const a = { object: { counter: 0 } };
    const b = service.getCounterWithoutCopyingReferences(a);

    b.object.counter++;

    expect(a.object.counter).to.be.eql(1);
    expect(b.object.counter).to.be.eql(1);
  });

  it.skip('should return a counter without modifying the original instance (optional sub-challenge)', () => {
    const a = { object: { counter: 0 } };
    const b = service.getCounterWithoutDeepCopyingReferences(a);

    b.object.counter++;

    expect(a.object.counter).to.be.eql(0);
    expect(b.object.counter).to.be.eql(1);
  });
});
