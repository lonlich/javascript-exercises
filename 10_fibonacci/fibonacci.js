const fibonacci = function(num) {
    
    //do not accept negatives
    if (num < 0) {
        return 'OOPS'
    }
    
    //build fib sequence
    const arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }

    return arr[num];
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
