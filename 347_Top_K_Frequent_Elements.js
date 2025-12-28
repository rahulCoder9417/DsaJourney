/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if( nums.length ===1 )return nums
    const map = new Map()
    for (const i of nums) {
        map.set(i,(map.get(i) ?? 0) +1)
    }
    const sort = Array.from(map.entries())
                .sort((a, b) => b[1]-a[1])
                .slice(0,k);
    return sort.map(([num, freq]) => num); 


};
console.log(topKFrequent([1,1,1,2,2,3],2))