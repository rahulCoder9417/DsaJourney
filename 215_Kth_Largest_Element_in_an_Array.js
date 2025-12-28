/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinPriorityQueue();

    for (const num of nums) {
        if (minHeap.size() < k) {
            minHeap.push(num);
        } else if (num > minHeap.front()) {
            minHeap.pop();
            minHeap.push(num);
        };
    };

    return minHeap.front();
};
