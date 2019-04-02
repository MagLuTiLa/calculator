const calculator = document.querySelector('.calculator');
const dataset = calculator.dataset;
dataset.storedNumber = 0;
dataset.operator = 'none';
dataset.prevButton
const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');

buttons.addEventListener('click', e=> {
    var key = e.target;
    var value = key.textContent;
    var func = key.dataset.function;
    var curNumber = display.textContent;
    
    if (key.matches('button')) {
        // Function key
        if (func)
        {
            switch (func)
            {
                case 'dot':
                if (curNumber % 1 === 0)/*(dataset.prevButton !== 'dot')*/
                    display.textContent = curNumber + '.';
                break;

                case 'result':
                    console.log("Try " + dataset.storedNumber + " and " + dataset.operator);
 
                    var result = 0;
                    switch(dataset.operator)
                    {
                        case 'add':
                        result = Number(dataset.storedNumber) + Number(curNumber);
                        break;
                        case 'subtract':
                        result = Number(dataset.storedNumber) - Number(curNumber);
                        break;
                        case 'multiply':
                        result = Number(dataset.storedNumber) * Number(curNumber);
                        break;
                        case 'divide':
                        result = Number(dataset.storedNumber) / Number(curNumber);
                        break;
                        default:
                        result = curNumber;
                        break;
                    }
                    
                    console.log("Result of " + dataset.operator + ": "+ dataset.storedNumber + " " + curNumber + " = " + result);
                    display.textContent = result;
                    dataset.storedNumber = 0;

                break;

                case 'clear':
                    display.textContent = 0;
                    dataset.storedNumber = 0;
                    dataset.operator = 'none';
                break;

                default:
                    console.log("Operator")
                    dataset.storedNumber = curNumber;
                    display.textContent = 0;
                    dataset.operator = func;
                break;
            }

            dataset.prevButton = func;
        }

        // Number key
        else
        {
            if (curNumber != 0)
                display.textContent = curNumber + value;
            else
                display.textContent = value;

            dataset.prevButton = 'number';
        }
        
        console.log("Stock:" + dataset.storedNumber);
    }
})  