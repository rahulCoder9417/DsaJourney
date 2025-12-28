/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let queue = [];
    let fresh = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            } else if (grid[i][j] === 1) {
                fresh++;
            }
        }
    }
    if (fresh === 0) return 0;

    let minutes = 0;
    let dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 2: BFS level by level
    while (queue.length > 0) {
        let size = queue.length;
        let changed = false;

        for (let k = 0; k < size; k++) {
            let [i, j] = queue.shift();

            for (let [dx, dy] of dirs) {
                let x = i + dx, y = j + dy;

                if (x >= 0 && y >= 0 && x < rows && y < cols && grid[x][y] === 1) {
                    grid[x][y] = 2;  
                    fresh--;
                    changed = true;
                    queue.push([x, y]);
                }
            }
        }

        if (changed) minutes++;
    }

    return fresh === 0 ? minutes : -1;
};
