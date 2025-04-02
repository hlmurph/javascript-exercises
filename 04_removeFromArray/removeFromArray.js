const removeFromArray = function(array) {
    let newArray = [];
    let toRemove = [];
    for (let i = 1; i < arguments.length; i++) {
        toRemove.push(arguments[i]);
    }
    outer: for (const item of array) {
        for (const removeItem of toRemove) {
            if (item === removeItem) {
                continue outer;
            }
        }
        newArray.push(item);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
