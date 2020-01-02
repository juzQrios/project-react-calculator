import operate from './operate';
/**
 * Use the buttonName argument to mutate the calculator’s data object & return its modified version
 * @param {{total: number, next: string, operation: string}} calculatorData - Calculator data object
 * @param {string} buttonName - Button name
 * @returns Modified calculator’s data object
 */
const calculate = (calculatorData = { total: null, next: null, operation: null }, buttonName) => {
  let { total, next, operation } = calculatorData;
  let modifiedCalculatorData = { total, next, operation };
  switch (buttonName) {
    case '+':
    case '-':
    case 'X':
    case '÷':
    case '%':
      if (!operation) {
        total = total || Number(next);
        next = null;
        operation = buttonName;
      } else {
        total = total === null ? 0 : total;
        next = next === null ? 0 : Number(next);
        total = operate(total, next, operation);
        next = null;
        operation = buttonName;
      }
      modifiedCalculatorData = { total, next, operation };
      break;
    case '+/-':
      next = String(operate(Number(next), -1, 'X'));
      modifiedCalculatorData = { total, next, operation };
      break;
    case '=':
      total = total === null ? 0 : total;
      next = next === null ? total : Number(next);
      operation = operation === null ? '+' : operation;
      total = operate(total, next, operation);
      next = null;
      operation = null;
      modifiedCalculatorData = { total, next, operation };
      break;
    case 'AC':
      total = null;
      next = null;
      operation = null;
      modifiedCalculatorData = { total, next, operation };
      break;
    default:
      next = next ? next + buttonName : buttonName;
      modifiedCalculatorData = { total, next, operation };
      break;
  }
  return modifiedCalculatorData;
};

export default calculate;
