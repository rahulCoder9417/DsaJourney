/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var rotateElements = function(nums, k) {
    let posArray = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0){
            posArray.push(nums[i])
        }
    }
    let n =  posArray.length
    k = k%n
    posArray = posArray.slice(k).concat(posArray.slice(0,k))

    let l=0;
       for( i=0;i<nums.length;i++){
        if(nums[i]>=0){
            nums[i]= posArray[l++]
        }
       }

    
    return nums
}