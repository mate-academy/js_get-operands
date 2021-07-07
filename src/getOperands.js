'use strict';

function getOperands(str) {
  const regexp = /-?\d(\.\d)?/g;
  const strMatch = str.match(regexp);

  const firstOperand = strMatch[0];
  const secondOperand = strMatch[1];

  return `a: ${firstOperand}, b: ${secondOperand}`;
}

module.exports = getOperands;
