function calculate(operator, number1, number2) {
    var result = 0;
    switch (operator) {
        case 'add':
            result = Number(number1) + Number(number2);
            break;
        case 'subtract':
            result = Number(number1) - Number(number2);
            break;
        case 'multiply':
            result = Number(number1) * Number(number2);
            break;
        case 'divide':
            result = Number(number1) / Number(number2);
            break;
        default:
            result = number2;
            break;
    }
    return result;
}

function addDigit(curNumber, value) {
    var newNumber = value;
    if (curNumber != 0)
        newNumber = curNumber + value; 

    return newNumber;
}