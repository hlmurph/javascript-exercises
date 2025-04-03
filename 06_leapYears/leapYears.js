const leapYears = function(year) {
    let isLeap;
    if (year % 4 == 0) {
        if ((year % 100 == 0) && (year % 400 != 0)) {
            isLeap = false;
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }
    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
