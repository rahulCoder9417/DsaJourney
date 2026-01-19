function change(amount, coins) {
    const n = coins.length;
    const dp = Array.from({ length: n + 1 }, () =>
      Array(amount + 1).fill(0)
    );
  
    dp[0][0] = 1;
  
    for (let i = 1; i <= n; i++) {
      dp[i][0] = 1;
      for (let j = 1; j <= amount; j++) {
        if (coins[i - 1] <= j) {
          dp[i][j] =
            dp[i - 1][j] +
            dp[i][j - coins[i - 1]];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  
    return dp[n][amount];
  }
  