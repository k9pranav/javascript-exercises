const fibonacci = function(num) {

    if (num <= 2){
        return 1
    } else {
        return fibonacci(num-1) + fibonacci(num-2)
    }

};

// Do not edit below this line
module.exports = fibonacci;
