/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length
    let col = board[0].length
    let d = [[0,1],[1,0],[0,-1],[-1,0]]
    let traps = new Set()
    function inBounds(i,j){ return i>=0 && i<rows && j>=0 && j<col && board[i][j]==="O" }
    function checkTrap(i,j) {
        if(!inBounds(i,j) || traps.has(`${i},${j}`))return 
        traps.add(`${i},${j}`)
        for (let o = 0; o < d.length; o++) {
            const [di,dj] = d[o];
            checkTrap(i+di,j+dj)
        }
    }
    for (let l = 0; l < col; l++) {
        checkTrap(0,l)
    }
    for (let l = 1; l < rows-1; l++) {
        checkTrap(l,0)
    }
    for (let l = 1; l < rows-1; l++) {
        checkTrap(l,col-1)
    }
    for (let l = 0; l < col; l++) {
        checkTrap(rows-1,l)
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < col; j++) {
            if(board[i][j]==="O" && !traps.has(`${i},${j}`))board[i][j]="X"
        }
    }
};