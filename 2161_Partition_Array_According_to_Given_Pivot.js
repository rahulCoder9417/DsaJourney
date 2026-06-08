/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const less = []
    const more = []
    const equal = []
    for (i of nums){
        if(i<pivot){
            less.push(i)
        }else if(i>pivot){
            more.push(i)
        }else{
            equal.push(i)
        }
    }

    return [...less,...equal,...more]
};