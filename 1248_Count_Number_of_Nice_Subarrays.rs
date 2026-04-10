impl Solution {
    pub fn number_of_subarrays(nums: Vec<i32>, k: i32) -> i32 {
        Self::at_most(&nums, k) - Self::at_most(&nums, k - 1)
    }

    fn at_most(nums: &Vec<i32>, k: i32) -> i32 {
        let mut l = 0;
        let mut count = 0;
        let mut odd_count = 0;

        for r in 0..nums.len() {
            if nums[r] % 2 != 0 {
                odd_count += 1;
            }

            while odd_count > k {
                if nums[l] % 2 != 0 {
                    odd_count -= 1;
                }
                l += 1;
            }

            count += (r - l + 1) as i32;
        }

        count
    }
}