/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const cache = {}
    function dfs(index,left) {
        if(index===nums.length ){
            if (left===0) return 1
            return 0
        }
        if (cache[index] && left in cache[index]) {
            return cache[index][left]
        }
        
        let ways = dfs(index+1,left+nums[index]) + dfs(index+1,left-nums[index])
        if (!cache[index]) cache[index] = {}
        cache[index][left] = ways
         return ways
    }
    return dfs(0,target)
};