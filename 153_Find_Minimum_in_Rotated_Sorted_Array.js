/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0,right=nums.length-1
    if(nums[0]<nums[right] || nums.length===1) return nums[0]
    while(left<=right){
        let mid= Math.floor((left+right)/2)
        if (nums.at(mid)<nums.at(mid-1)) {
            return nums[mid]
        } else if(nums[mid]<nums[0]) {
            right = mid -1
        }else{
            left = mid+1
        }
    }
};
