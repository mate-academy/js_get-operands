'use strict';

const getOperands = require('./getOperands');

test('1 + 2', () => {
  expect(getOperands('11 + 2'))
    .toBe('a: 11, b: 2');
});

test('1.2 * -3.4', () => {
  expect(getOperands('1.222 * -33.4'))
    .toBe('a: 1.222, b: -33.4');
});

test('-3 / -6', () => {
  expect(getOperands('-3 / -6'))
    .toBe('a: -3, b: -6');
});

test('-2 - 2', () => {
  expect(getOperands('-22 - 22'))
    .toBe('a: -22, b: 22');
});

test('2 - -2', () => {
  expect(getOperands('2 - -2'))
    .toBe('a: 2, b: -2');
});

test('-2 + -2', () => {
  expect(getOperands('-2 + -2'))
    .toBe('a: -2, b: -2');
});

test('-2 - -2', () => {
  expect(getOperands('-2 - -2'))
    .toBe('a: -2, b: -2');
});
