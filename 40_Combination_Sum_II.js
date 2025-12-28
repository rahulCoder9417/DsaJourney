function combinationSum2(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b); 

    function dfs(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);
            dfs(i + 1, path, sum + candidates[i]); 
            path.pop();
        }
    }

    dfs(0, [], 0);
    return result;
}
