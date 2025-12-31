/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity
    let currSum = -Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>currSum && (nums[i]+currSum)<nums[i]) {
            maxSum = Math.max(maxSum,currSum)
            currSum = nums[i]
        } else if(nums[i]<0) {
            maxSum = Math.max(currSum,maxSum)
            currSum += nums[i]
        } else{
            currSum += nums[i]
        }
    }
  return (Math.max(currSum,maxSum))
};