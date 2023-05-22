const add = function(a, b) {
  return a + b

};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let thesum = 0;
  
  for (i in arr){
    thesum += arr[i]
  }

  return thesum
	
};

const multiply = function(arr) {
  let product = 1;
  for (i in arr){
    product *= i
  } 

  return product

};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(a) {
  if (a == 0){
    return 1
  }
  else{
    return factorial(a-1)*a
  }

	
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
