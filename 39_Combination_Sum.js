function combinationSum(candidates, target) {
  const result = [];

  function dfs(index, path, sum) {
      if (sum === target) {
          result.push([...path]);
          return;
      }
      if (index >= candidates.length || sum > target) return;

      path.push(candidates[index]);
      dfs(index, path, sum + candidates[index]); 
      path.pop();
      dfs(index + 1, path, sum); 
  }

  dfs(0, [], 0);
  return result;}