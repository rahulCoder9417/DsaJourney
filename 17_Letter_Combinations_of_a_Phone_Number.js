/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits==="")return []
    let result = []
    const map = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"],
      ]);
    let arr= []
    for (let i = 0; i < digits.length; i++) {
        arr.push(map.get(digits[i]));     
    }
    function backtrack(index,s){
        if(index>=arr.length){result.push(s);return}
        for (let j = 0; j < arr[index].length; j++) {
            backtrack(index+1,s + arr[index][j])
        }
    }
    backtrack(0,"")
return result
};