var exist = function(board, word) {
    const h = board.length;
    const w = board[0].length;
    let set = new Set();
    let isWord = false;

    function dfs(x, y, idx) {
        if (idx === word.length) return isWord = true;
        if (x < 0 || x >= w || y < 0 || y >= h) return;
        const key = `${x},${y}`;
        if (set.has(key) || board[y][x] !== word[idx]) return;

        set.add(key);

        dfs(x + 1, y, idx + 1);
        dfs(x - 1, y, idx + 1);
        dfs(x, y + 1, idx + 1);
        dfs(x, y - 1, idx + 1);

        set.delete(key); 
    }

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            dfs(j, i, 0);
            if (isWord) return true;
        }
    }

    return false;
};
