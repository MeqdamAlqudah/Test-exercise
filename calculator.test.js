const { calculator } = require('./calculator.js');

const calculate = new calculator();
describe('test calculator functionality', () => {
    test('should add two numbers', () => {
        expect(calculate.add(5, 7)).toBe(12);
    })
    test('should subtract two numbers', () => {
        expect(calculate.subtract(7, 5)).toBe(2);
    })
    test('should divide two numbers', () => {
        expect(calculate.divide(6, 2)).toBe(3);
    })
    test('should multiply two numbers', () => {
        expect(calculate.multiply(5, 7)).toBe(35);
    })
});