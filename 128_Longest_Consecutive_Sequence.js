var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxLen = Math.max(maxLen, currentStreak);
        }
    }

    return maxLen;
};
