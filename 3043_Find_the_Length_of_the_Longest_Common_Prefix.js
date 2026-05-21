/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const set = new Set();

    for (let num of arr1) {
        while (num > 0) {
            set.add(num);
            num = Math.floor(num / 10);
        }
    }

    let longest = 0;

    for (let num of arr2) {
        while (num > 0) {
            if (set.has(num)) {
                longest = Math.max(longest, num.toString().length);
            }
            num = Math.floor(num / 10);
        }
    }

    return longest;
};