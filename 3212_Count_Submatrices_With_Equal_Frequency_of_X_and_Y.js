/**
 * @param {character[][]} grid
 * @return {number}
 */
var numberOfSubmatrices = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const mat = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 'X') mat[i][j] = 1;
            else if (grid[i][j] === 'Y') mat[i][j] = -1;
        }
    }

    let count = 0;

  for (let top = 0; top < m; top++) {
        const colSum = Array(n).fill(0);

      for (let bottom = top; bottom < m; bottom++) {
     for (let col = 0; col < n; col++) {
                colSum[col] += mat[bottom][col];
            }
   const map = new Map();
            map.set(0, 1);

            let prefix = 0;

            for (let col = 0; col < n; col++) {
                prefix += colSum[col];

                if (map.has(prefix)) {
                    count += map.get(prefix);
                }

                map.set(prefix, (map.get(prefix) || 0) + 1);
            }
        }
    }

    return count;
};