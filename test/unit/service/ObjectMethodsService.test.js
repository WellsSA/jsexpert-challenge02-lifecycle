const { describe, it, before } = require('mocha');

const { expect } = require('chai');

const ObjectMethodsService = require('../../../src/service/ObjectMethodsService');

const MOCK_OBJECT = {
  name: 'Wells',
  age: 21,
};

describe('ObjectMethodsService Suite Tests', () => {
  let service = {};

  before(() => {
    service = new ObjectMethodsService();
  });

  it("should consider only the object 'age' when coercing it to a number", () => {
    const rawObject = Object.create(MOCK_OBJECT);

    const object = service.getEnhancedObject(rawObject);

    const result = object + 3;
    const expected = 24;

    const result2 = Number(object);
    const expected2 = 21;

    expect(result).not.to.be.deep.equal('[object Object]3');
    expect(result).to.be.eql(expected);
    expect(result2).to.be.eql(expected2);
  });

  it('should provide a readable description of the object on string coercing', () => {
    const rawObject = Object.create(MOCK_OBJECT);

    const object = service.getEnhancedObject2(rawObject);

    const result = object + '';
    const result2 = String(object);
    const result3 = object.toString();

    const expected = `[name="${rawObject.name}",age=${rawObject.age}]`;

    expect(result).not.to.be.deep.equal('[object Object]');
    expect(result).to.be.deep.equal(expected);
    expect(result2).to.be.deep.equal(expected);
    expect(result3).to.be.deep.equal(expected);
  });

  it('should provide a readable description or valid number representation of the object depending on the context', () => {
    const rawObject = Object.create(MOCK_OBJECT);

    const object = service.getEnhancedObjectWithoutValueOfOrToString(rawObject);

    const result = String(object);
    const result2 = Number(object);

    const expected = `[name="${rawObject.name}",age=${rawObject.age}]`;
    const expected2 = 21;

    expect(result).not.to.be.deep.equal('[object Object]');
    expect(result2).not.to.be.deep.equal('NaN');
    expect(result).to.be.deep.equal(expected);
    expect(result2).to.be.deep.equal(expected2);
  });
});
