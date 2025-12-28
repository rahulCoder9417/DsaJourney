var lengthOfLIS = function(nums) {
    const map = new Map();
    map.set(nums[0], [nums[0]]);
    let maxL = 1;

    for (let i = 1; i < nums.length; i++) {
        let bestSeq = [];

        for (const [key, seq] of map.entries()) {
            if (key < nums[i] && seq.length > bestSeq.length) {
                bestSeq = seq;
            }
        }

        const newSeq = [...bestSeq, nums[i]];
        map.set(nums[i], newSeq);

        maxL = Math.max(maxL, newSeq.length);
    }

    return maxL;
};
