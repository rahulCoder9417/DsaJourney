/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const seen =[]
    let count = 0
    return A.map((c,i)=>{
        if(seen[c])count++
        else seen[c] = true

        if (seen[B[i]])count++
        else seen[B[i]]=true
        return count
    })
};