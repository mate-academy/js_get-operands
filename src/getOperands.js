'use strict';

/**
 * Implement getOperands function:
 *
 * Function takes a string which is Math expression of 2 numbers and returns
 * it's operands in the next format: 'a: <first_operand>, b: <second_operand>'.
 *
 * Given string is a math operation which contains 2 numbers (operands) and
 * operator (*, /, +, -). For example: '1 + 2',  '1.2 * -3.4',  '-3 / -6',
 * '-2 - 2'
 *
 * Allowed operators: '+', '-', '*', '/'.
 * Whitespaces around operator and numbers are allowed.
 * Numbers can be floats (1.2, 2.354).
 * Negative numbers have a minus sign '-' before them without whitespace.
 * (-2, -2.354).
 *
 * getOperands('1 + 2') === 'a: 1, b: 2';
 * getOperands('1.2 * -3.4') === 'a: 1.2, b: -3.4';
 * getOperands('1 - 2') === 'a: 1, b: 2';
 * getOperands('1 - -2') === 'a: 1, b: -2';
 *
 * @param {string} str
 *
 * @return {string} - operands
 */
function getOperands(str) {
  // write code here
  let a = "a: ";
  let b = "b: ";
  let operands = ", ";
  let pattern = /\B[-|+|*|/]\B/gm;
  let indexSign = str.search(pattern);
  for (let i = indexSign + 2; i < str.length; i++) {
    b = b + str[i];
  }
  for (let i = 0; i < indexSign - 1; i++) {
    a = a + str[i];
  }
  operands = a + operands + b;
  return operands;
}

module.exports = getOperands;
