let document = (typeof document === "undefined") ? {} : document;

const calculations = require('./calculations.js');


const calculator = document.querySelector('.calculator');

const dataset = calculator.dataset;
dataset.storedNumber = 0;
dataset.operator = 'none';
dataset.prevButton

const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');


buttons.addEventListener('click', e => {
    var key = e.target;
    var value = key.textContent;
    var func = key.dataset.function;
    var curNumber = display.textContent;

    if (key.matches('button')) {
        // Function key
        if (func) {
            switch (func) {
                case 'dot':
                    if (curNumber % 1 === 0) /*(dataset.prevButton !== 'dot')*/
                        display.textContent = curNumber + '.';
                    break;

                case 'result':
                    var result = calculations.calculate(dataset.operator, dataset.storedNumber, curNumber)
                    display.textContent = result;
                    dataset.storedNumber = 0;
                    break;

                case 'clear':
                    display.textContent = 0;
                    dataset.storedNumber = 0;
                    dataset.operator = 'none';
                    break;

                default:
                    dataset.storedNumber = curNumber;
                    display.textContent = 0;
                    dataset.operator = func;
                    break;
            }

            dataset.prevButton = func;
        }

        // Number key
        else {
            display.textContent = calculations.addDigit(curNumber, value);

            dataset.prevButton = 'number';
        }
    }
})