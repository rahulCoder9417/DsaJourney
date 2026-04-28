
function TreeNode(val, left = null, right = null) {
    this.val = (val === undefined ? 0 : val);
    this.left = left;
    this.right = right;
}

var longestZigZag = function(root) {
    let ans = 0;

    function dfs(node, goLeft, length) {
        if (!node) return;
    ans = Math.max(ans, length);

        if (goLeft) {
            dfs(node.left, false, length + 1);
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, length + 1);
            dfs(node.left, false, 1);
        }
    }

    dfs(root, true, 0);   
    dfs(root, false, 0);  

    return ans;
};