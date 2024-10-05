const reverseString = function(input) {
//1. цикл с количеством лупов = длине исходной строки
//2. текущая итерация лупа = индексу новой строки
//3. индекс инпут строки = начиная с последнего элемента, уменьшая на -1 с каждой итерацией пока индекс не станет = 0

//loop implementation
// let inputIndex = input.length - 1;
// let resultIndex = 0;
// let result = '';

// while (inputIndex >= 0) {

//     result += input[inputIndex];

//     inputIndex--;
//     resultIndex++;
// }
//     return result;

    return input.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
