const sumAll = function(firstNum, secondNum) {
    
    if (
        !(Number.isInteger(firstNum) && Number.isInteger(secondNum) && 
        firstNum > 0 && 
        secondNum > 0)
    ) {
        return `ERROR`;
    }

    //меняем цифры местами, если первая больше второй
    if (firstNum > secondNum) {
        [firstNum, secondNum] = [secondNum, firstNum]
    }

    let result = null;
    for (let i = firstNum; i <= secondNum; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
