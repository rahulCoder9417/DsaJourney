/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    let i=0
    const r =[]
    while (i<intervals.length) {
        let lastR =r[r.length-1]
        if (r.length ==0 || (lastR[1]<intervals[i][0]&&lastR[0]<intervals[i][1])) {
            r.push(intervals[i])
        } else {
            r[r.length-1] = [Math.min(lastR[0],intervals[i][0]),Math.max(intervals[i][1],lastR[1])]
        }

        i++
    }
    return r
};