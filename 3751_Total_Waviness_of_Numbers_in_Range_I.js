/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    function getN(n){
        let s = String(n)
        let a = s.split("")
        let count =0
        for (let i =1;i<a.length-1;i++){
            if ((a[i-1]>a[i]&&a[i+1]>a[i]) || (a[i-1]<a[i]&&a[i+1]<a[i]))count++
        }
        return count
    }
    let count =0
    for (let j=num1 ;j<=num2;j++){
        count+=getN(j)
    }
    return count
};