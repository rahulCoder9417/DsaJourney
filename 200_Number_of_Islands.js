/**
 * @param {character[][]} grid
 * @return {number}
 */
// [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
var numIslands = function(grid) {
    let ilands = 0
    let isLand = false
    function dfs(i,j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === "0") {
            return;
        }

        grid[i][j] = "0"
        if(!isLand)isLand=true
        dfs(i,j+1)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i-1,j)
        return
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            dfs(i,j)
            if(isLand){
                ilands++
                isLand=false
            }
        }
    }
    return ilands
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))