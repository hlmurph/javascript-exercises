const fibonacci = function(number) {
    let array = [1, 1];
    number = Number(number);
    if (number == 1) return 1;
    else if (number == 0) return 0;
    else if (number < 0) return 'OOPS';
    for (i = 0; i <= (number) - 3; i++) {
        array.push(array[i] + array[i + 1]);
    }
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
