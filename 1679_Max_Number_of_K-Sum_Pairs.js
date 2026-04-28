/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let count = 0
    let l=0;let r = nums.length-1
    while(l<r){
        if((nums[l]+nums[r])===k){
            l++
            r--
            count++
        }else if((nums[l]+nums[r])>k){
       r--
        }else{l++}
    }
    return count
};