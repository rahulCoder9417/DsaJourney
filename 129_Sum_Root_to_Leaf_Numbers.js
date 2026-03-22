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
var sumNumbers = function(root) {
    let num = []
    function dfs(root,number){
        if(!root){
            return
        }
        if(!root.left && !root.right){
            num.push(Number(number+`${root.val}`))
            return
        } 
        if(root.left){dfs(root.left,number+`${root.val}`)}
        
        if(root.right)dfs(root.right,number+`${root.val}`)
    }
    dfs(root,"")
    return num.reduce((acc,i)=>{
        return acc+i
        },0)
};