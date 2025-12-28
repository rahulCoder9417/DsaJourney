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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */


var isSubtree = function(root, subRoot) {
    const arr= []
    function getR(root,val){
        if(!root)return false
        if(root.val===val)arr.push(root)
        getR(root.left,val)
        getR(root.right,val)
    }

    function isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false; 
        if (p.val !== q.val) return false; 
        
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    getR(root,subRoot.val)
    if(arr.length===0)return false;
    return arr.some((i)=>isSameTree(i,subRoot))

};