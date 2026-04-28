/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let reachM = new Array(n+1).fill(0)
    for(let i =0;i<=n;i++){
        let l = Math.max(0,i - ranges[i])
        let r =  Math.min(n,i+ranges[i])
        reachM[l] = Math.max(reachM[l],r)
    }
    let taps = 0
    let currEnd = 0 
    let maxReach =0
    for(let i =0;i<=n;i++){
        if(i>maxReach)return -1
        maxReach = Math.max(maxReach,reachM[i])
        if(i===currEnd){
            if(i!==n){
                taps++
                currEnd = maxReach
            }
        }
    }
    return taps
};