const { stringLength, reverseString, capitalize } = require("./stringOperation.js");

describe("test operations on a string", () => {
    test('should return string "Meqdam" length', () => {
        expect(stringLength("Meqdam")).toBe(6);
    });
    test('should return reversed string', () => {
        expect(reverseString("madqeM")).toBe('Meqdam');
    })
    test('takes a string and return that string with the first character capitalized', () => { expect(capitalize("meqdam")).toBe("Meqdam") });
});