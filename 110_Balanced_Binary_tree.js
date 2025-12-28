
var isBalanced= function(root){
    if(!root)return true
    var depth = function(node){
        if(!node) return 0
        let left = depth(node.left)
        let right = depth(node.right)
        if(left===false || right ===false )return false
        if(Math.abs(left-right)>1)return false
        return 1+ Math.max(left,right)
    }
    if(depth(root))return true
    return false
}