const add = function(...nums) {
  let total = null; 
  nums.forEach(num => total += num);
  return total; 
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
	let total = 0; 
  array.forEach(item => total += item);
  return total;
};

const multiply = function(array) {
  let total = 1; 
  array.forEach(item => total *= item);
  return total;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }  
    return num * factorial(num - 1);
};

factorial(5);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
