const sumAll = function(num1, num2) {
    let result = 0;
    let greater;
    let lesser;
    if (num1 > num2) {
        greater = num1;
        lesser = num2;
    } else {
        greater = num2;
        lesser = num1;
    }
    if (lesser < 0) return 'ERROR';
    if ((typeof(lesser) != 'number') || (typeof(greater) != 'number')) return 'ERROR';
    if ((lesser % 1 != 0) || (greater % 1 != 0)) return 'ERROR';
    for (let i = greater; i >= lesser; i--) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
