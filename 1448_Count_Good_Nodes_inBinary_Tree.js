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
 * @return {number}
 */
var goodNodes = function(root) {
    let l = 0
    var preorder = function(node,maxP){
        if(!node) return
        if(node.val>=maxP)l=l+1
        let a = Math.max(maxP,node.val)
        preorder(node.left,a)
        preorder(node.right,a)
    }
    preorder(root,root.val)
    return l
};