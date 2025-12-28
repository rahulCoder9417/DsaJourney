/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = []
    nums.sort((a,b)=>a-b)
    function dfs(index,path) {
        if (index === nums.length) {
            result.push([...path]);
            return;
        }
        path.push(nums[index]);
      dfs(index+1,path) 
      path.pop()
      let nextIndex = index + 1;
        while (nextIndex < nums.length && nums[nextIndex] === nums[index]) {
            nextIndex++;
        }
        dfs(nextIndex, path);
    }
    dfs(0,[])
    return result
};