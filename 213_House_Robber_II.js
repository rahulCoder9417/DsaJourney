/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (val) {
    let n = val.length;
    if (n == 1) return val[0];


    var helper = function (start, end) {
        let p2 = p1 = 0;
        for (let i = start; i <= end; i++) {
            curr = Math.max(val[i] + p2, p1);
            p2 = p1;
            p1 = curr
        }
        return p1;
    };
    return Math.max(helper(0, n-2), helper(1, n-1));
};