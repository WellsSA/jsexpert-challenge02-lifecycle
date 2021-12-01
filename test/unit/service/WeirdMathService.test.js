const { describe, it, before } = require('mocha');

const { expect } = require('chai');

const WeirdMathService = require('../../../src/service/WeirdMathService');

describe('WeirdMathService Suite Tests', () => {
  let service = {};

  before(() => {
    service = new WeirdMathService();
  });

  it('should return expected value when doing math with a boolean and a number', () => {
    const a = true;
    const b = 5;
    const expected = 6;

    const result = service.getWeirdBooleanNumberMath(a, b);
    expect(result).to.be.eql(expected);
  });

  it('should return expected value when doing math with a string and a boolean', () => {
    const a = '256';
    const b = true;
    const expected = '256true';

    const result = service.getWeirdStringBooleanMath(a, b);
    expect(result).to.be.eql(expected);
  });

  it('should return expected value when doing math with a string and a boolean | part 2', () => {
    const a = '256';
    const b = true;
    const expected = 255;

    const result = service.getWeirdStringBooleanMath2(a, b);
    expect(result).to.be.deep.equal(expected);
  });

  it('should return expected value when doing math with a string and a number', () => {
    const a = '46';
    const b = -1;
    const expected = 47;

    const result = service.getWeirdStringNumberMath(a, b);
    expect(result).to.be.deep.equal(expected);
  });

  it('should return expected value when doing math with a string and a number', () => {
    const a = '46';
    const b = false;
    const expected = 46;

    const result = service.getWeirdStringNumberMath(a, b);
    expect(result).to.be.deep.equal(expected);
  });
});
