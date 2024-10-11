const fibonacci = function(num) {
    const arr = [0, 1];
    for (let i = 2; i <= num; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    arr.shift(); //remove 0 from the start of the sequence
    return arr[num - 1];
};

fibonacci(4);
// Do not edit below this line
module.exports = fibonacci;
