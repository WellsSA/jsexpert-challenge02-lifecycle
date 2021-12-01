const { describe, it, before } = require('mocha');

const { expect } = require('chai');

const StatementsService = require('../../../src/service/StatementsService');

describe('StatementsService Suite Tests', () => {
  let service = {};

  before(() => {
    service = new StatementsService();
  });

  it('should return expected value wafter checking a conditional statement', () => {
    const a = 'just a random string';
    const b = 123456;
    const expected = 'just a random string';

    const result = service.getReturnBasedOnStatement(a, b);
    expect(result).to.be.eql(expected);
  });

  it('should return expected value wafter checking a conditional statement | part 2', () => {
    const a = 'another random string';
    const b = 123456;
    const expected = 123456;

    const result = service.getReturnBasedOnStatement2(a, b);
    expect(result).to.be.eql(expected);
  });

  it('should return expected value wafter checking a multiple conditional statement', () => {
    const a = 'first string';
    const b = 'second string';
    const c = 'third string';

    const expected = 'second string';

    const result = service.getReturnBasedOnStatement3(a, b, c);
    expect(result).to.be.eql(expected);
  });

  it('should return expected value wafter checking a multiple conditional statement | part 2', () => {
    const a = 'first string';
    const b = 'second string';
    const c = 'third string';

    const expected = 'third string';

    const result = service.getReturnBasedOnStatement4(a, b, c);
    expect(result).to.be.eql(expected);
  });
});
