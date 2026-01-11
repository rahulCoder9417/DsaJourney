var uniquePaths = function(m, n) {
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    dp[m - 1][n - 1] = 1;
    for (let i = m-1; i >= 0; i--) {
        for (let j = n-1; j>=0; j--) {
            dp[i][j] += dp[i][j+1]  + dp[i+1][j]
        }
    }
    return dp[0][0]
};