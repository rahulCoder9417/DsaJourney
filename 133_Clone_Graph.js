/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let visited = new Map(); 

    function dfs(oldNode) {
        if (visited.has(oldNode)) {
            return visited.get(oldNode);
        }

        let clone = new Node(oldNode.val);
        visited.set(oldNode, clone);

        for (let nei of oldNode.neighbors) {
            clone.neighbors.push(dfs(nei));
        }

        return clone;
    }

    return dfs(node);
};
