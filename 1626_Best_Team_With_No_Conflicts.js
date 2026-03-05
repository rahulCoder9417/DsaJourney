/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    let totaleScore = 0
    let newArr = ages.map((age,i)=>[age,scores[i]])
    newArr.sort((a,b)=>{
        if(a[0]===b[0])return a[1]-b[1]
        return a[0]- b[0]
    })
    let dp = new Array(newArr.length).fill(0)
    for (let i = 0; i < newArr.length; i++) {
        dp[i] = newArr[i][1]
        for(let j =0;j<i;j++){
            if(newArr[j][1]<=newArr[i][1]){
                dp[i] = Math.max(dp[i],dp[j] + newArr[i][1])
            }
        }
        totaleScore = Math.max(totaleScore,dp[i])
    }
    return totaleScore
};