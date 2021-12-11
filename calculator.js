class calculator {
    add(numberOne, numberTwo) {
        return numberOne + numberTwo;
    };
    subtract(numberOne, numberTwo) {
        return numberOne - numberTwo;
    }
    divide(numberOne, numberTwo) {
        return numberOne / numberTwo;
    }
    multiply(numberOne, numberTwo) {
        return numberOne * numberTwo;
    }
}

exports.calculator = calculator;