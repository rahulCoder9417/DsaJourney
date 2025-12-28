/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0
    let r =numbers.length-1
    while(l<r){
        let a = numbers[l] + numbers[r]
        if(a===target){return[l+1,r+1]}
        else if(a>target){r-=1}
        else{l+=1}
    }
};