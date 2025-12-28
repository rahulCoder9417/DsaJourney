/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
//preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var buildTree = function(preorder, inorder) {
    let p =0
    let inMap = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i],i)
    }
    function helper(inLeft,inRight){
        if(inLeft>inRight)return null
        let val =preorder[p++]
        let idx = inMap.get(val)
        let root  = new TreeNode(val)
        root.left = helper(inLeft,idx-1)
        root.right = helper(idx+1,inRight)
        return root
    }
    return helper(0,inorder.length-1)
};