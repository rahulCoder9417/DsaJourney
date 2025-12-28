/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    const map = new Map()
    var preorder = function(node,level){
        if(!node) return
        if(!map.has(level))map.set(level,node.val)
        preorder(node.right,level+1)
        preorder(node.left,level+1)
    }
    preorder(root,0)
    return([...(map.values())])
};