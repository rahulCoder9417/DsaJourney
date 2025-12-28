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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 1
    let val = null
    function inOrder(node){
        if(!node)return
        inOrder(node.left)
        if(count===k){val=node.val;count++}
        else{count+=1
        }
        inOrder(node.right)

    }
    inOrder(root)
    return val
};
