const removeFromArray = function(array, ...nums) {
        
    return array.filter(item => !nums.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
