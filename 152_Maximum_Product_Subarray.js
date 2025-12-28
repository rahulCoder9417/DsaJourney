function maxProduct(nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    let res = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      let temp = curMax; 
      curMax = Math.max(nums[i], nums[i] * curMax, nums[i] * curMin);
      curMin = Math.min(nums[i], nums[i] * temp, nums[i] * curMin);
      res = Math.max(res, curMax);
    }
  
    return res;
  }
  