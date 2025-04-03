const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let result = 0;
  for (number of numbers) {
    result += number;
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for (number of numbers) {
    result = result * number;
  }
  return result;
};

const power = function(num, pow) {
	let result = 1;
  for (let i = 0; i < pow; i++) {
    result = result * num;
  }
  return result;
};

const factorial = function(number) {
	result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
