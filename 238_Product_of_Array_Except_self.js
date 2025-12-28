/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const b= nums.length
    const arr=[]
    const prefix = Array(b).fill(1)
    const suffix = Array(b).fill(1)
    for (let i = 1; i < b; i++) {
        prefix[i]=nums[i-1]*prefix[i-1]
        suffix[b-1-i]=nums[b-i]*suffix[b-i]
    }
    for (let i = 0; i < b; i++){
    arr[i]= prefix[i] * suffix[i]}
    return arr
};