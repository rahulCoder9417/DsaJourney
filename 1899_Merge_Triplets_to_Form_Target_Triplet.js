/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let curTrip = []
    function haveVal(arr) {
        let isTrue = false
        let isTrue2 = true
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]===target[j] ){
                isTrue = true
            }else if(arr[j]>target[j]){
                isTrue2 = false
            }
        }
        return isTrue && isTrue2;
    }
    function merge(arr,curr) {
        return [Math.max(arr[0],curr[0]),Math.max(arr[1],curr[1]),Math.max(arr[2],curr[2])]
    }
    function isSame(arr) {
        return(
            arr[0]===target[0] &&
            arr[1]===target[1] &&
            arr[2]===target[2] 
        )
    }
    for (let i = 0; i < triplets.length; i++) {
        if(haveVal(triplets[i])){
            if(curTrip.length===0){
                curTrip=triplets[i]
            }else{
               curTrip =merge(curTrip,triplets[i])
            }
            if(isSame(curTrip) ) return true
        }
    }
    if(curTrip.length ===3 && isSame(curTrip)){
        return true
    } else{
        return false
    }
};