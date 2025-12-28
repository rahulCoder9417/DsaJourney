var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        let val = matrix[row][col];

        if (val === target) return true;
        else if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};
