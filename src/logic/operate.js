import Big from 'big.js';
/**
 * Use the value of the operation argument to perform a simple math operation
 * @param {number} numberOne - First number operand
 * @param {number} numberTwo - Second number operand
 * @param {string} operation - A character denoting one of these math operation [+, -, x, ÷, %]
 * @returns Result of performed operation
 */
const operate = (numberOne, numberTwo, operation) => {
  let total;
  switch (operation) {
    case '+':
      total = Big(numberOne).plus(Big(numberTwo));
      break;
    case '-':
      total = Big(numberOne).minus(Big(numberTwo));
      break;
    case 'X':
      total = Big(numberOne).times(Big(numberTwo));
      break;
    case '÷':
      total = Big(numberOne).div(Big(numberTwo));
      break;
    case '%':
      total = Big(numberOne).mod(Big(numberTwo));
      break;
    default:
      throw new Error('unidentified operation');
  }
  return Number(total);
};

export default operate;
