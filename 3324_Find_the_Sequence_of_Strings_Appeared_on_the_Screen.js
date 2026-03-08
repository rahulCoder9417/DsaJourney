/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function(target) {
    const result = []
    let currS = ""
    for(let i =0;i<target.length;i++){
        for (let k = 97; k < 123; k++) {
           result.push(currS+String.fromCharCode(k))
           if(String.fromCharCode(k)===target[i]){
                currS = currS+String.fromCharCode(k)
                break
           } 
        }
    }
    return result
};