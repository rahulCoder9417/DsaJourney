/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a,b)=>{
        if(b[0] === a[0])return a[1] - b[1]
       return b[0] -a[0]
    })
    const result = []
    for (const i of people) {
        result.splice(i[1],0,i)
    }
    return result

};