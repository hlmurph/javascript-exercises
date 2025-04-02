const reverseString = function(str) {
    let result = '';
    strArray = [];
    for (i = str.length; i >= 0; i--) {
        strArray.push(str.charAt(i))
    }
    for (letter of strArray) {
        result += letter;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
