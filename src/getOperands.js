'use strict';

function getOperands(str) {
  const regexp = /-?\d(\.\d)?/g;

  const firstOperand = str.match(regexp)[0];
  const secondOperand = str.match(regexp)[1];

  return `a: ${firstOperand}, b: ${secondOperand}`;
}

module.exports = getOperands;
