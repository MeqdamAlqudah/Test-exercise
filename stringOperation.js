const stringLength = (string) => {
    return string.length;
};

const reverseString = (string) => {
    const reverseArray = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reverseArray.push(string[i]);
    }
    return reverseArray.join('');
};

const capitalize = (string) => {
    const lettersArray = [];
    lettersArray.push(string[0].toUpperCase());
    for (let i = 1; i < string.length; i++) {
        lettersArray.push(string[i]);
    }
    return lettersArray.join('');
};
module.exports = { stringLength, reverseString, capitalize };