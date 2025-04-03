const palindromes = function (str) {
    let result;
    let strClean = '';
    let strReverse = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            continue;
        } else {
            strClean += (str.charAt(i)).toLowerCase();
        }
    }
    // Remove punctiuation from the string
    let punctuation = /[\.,?!]/g;
    strClean = strClean.replace(punctuation, '');

    for (let i = strClean.length; i >= 0; i--) {
        strReverse += strClean.charAt(i)
    }
    for (let i = strClean.length; i >= 0; i--) {
        if (strClean.charAt(i) != strReverse.charAt(i)) {
            result = false;
            break;
        } else if (i == 0) {
            result = true;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
